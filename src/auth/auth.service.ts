import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UserService } from "../user/user.service";
import { Bad_request_400 } from "../_utils/custom.exeptions";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getDetail(username);
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!user) {
      throw new Bad_request_400();
    }

    if (user && passwordValid) {
      return {
        id: user.id,
        nama_lengkap: user.nama_lengkap,
        username: user.username,
        peran_akun: user.peran_akun
      };
    }

    throw new Bad_request_400();
  }

  async login(payload: any) {
    const user = {
      username: payload.username,
      name: payload.name
    };

    if (!user) {
      throw new Bad_request_400();
    }

    return {
      access_token: this.jwtService.sign(user),
      username: payload.username,
      nama_lengkap: payload.nama_lengkap,
      peran_akun: payload.peran_akun
    };
  }
}
