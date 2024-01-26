import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./strategies/local-strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: `${process.env.JWT_SECRET_KEY}`,
      signOptions: { expiresIn: "60000h" }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {
}
