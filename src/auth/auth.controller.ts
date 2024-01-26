import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import * as bcrypt from "bcrypt";
import { UserService } from "../user/user.service";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly usersService: UserService
  ) {
  }

  // Post / login
  @UseGuards(LocalAuthGuard)
  @Post("/login")
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  // Post / signup
  @Post("/signup")
  async addUser(
    @Body("nama_lengkap") nama_lengkap: string,
    @Body("username") username: string,
    @Body("password") password: string,
    @Body("peran_akun") peran_akun: string
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const result = await this.usersService.insertUser(
      nama_lengkap,
      username,
      hashedPassword,
      peran_akun
    );
    return {
      message: `Akun berhasil ditambahkan`,
      username: result.username,
      nama_lengkap: result.nama_lengkap,
      peran_akun: result.peran_akun
    };
  }
}
