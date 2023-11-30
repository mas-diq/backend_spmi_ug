import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import * as bcrypt from 'bcrypt';
import { UserService } from "../user/user.service";
import { responseConst } from "../responseConst";

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly usersService: UserService,
  ) {}

  // Post / login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    const user = await this.authService.login(req.user);
    if (!user) {
      throw new HttpException(
        responseConst['401'],
        HttpStatus.UNAUTHORIZED,
      );
    }
    return user;
  }

  // Post / signup
  @Post('/signup')
  async addUser(
    @Body('nama_lengkap') nama_lengkap: string,
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('jabatan_akun') jabatan_akun: string,
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const result = await this.usersService.insertUser(
      nama_lengkap,
      username,
      hashedPassword,
      jabatan_akun,
    );
    return {
      message: `Akun berhasil ditambahkan`,
      username: result.username,
      nama_lengkap: result.nama_lengkap,
      jabatan_akun: result.jabatan_akun,
    };
  }
}
