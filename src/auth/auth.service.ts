import {
  Injectable
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UserService } from "../user/user.service";

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
      return null;
    }

    if (user && passwordValid) {
      return {
        id: user.id,
        nama_lengkap: user.nama_lengkap,
        username: user.username,
        jabatan_akun: user.jabatan_akun
      };
    }

    return null;
  }

  async login(payload: any) {
    const user = {
      username: payload.username,
      name: payload.name
    };
    return {
      access_token: this.jwtService.sign(user),
      username: payload.username,
      nama_lengkap: payload.nama_lengkap,
      jabatan_akun: payload.jabatan_akun
    };
  }
}
