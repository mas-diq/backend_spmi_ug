import { Body, Controller, Get, HttpException, HttpStatus, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { responseConst } from "../responseConst";

@Controller("user")
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  // Get / detail
  @UseGuards(JwtAuthGuard)
  @Get("/detail")
  async getDetail(@Body("username") username: string) {
    const user = await this.userService.getDetail(username);

    if (!user) {
      throw new HttpException(responseConst["404"], HttpStatus.NOT_FOUND);
    }

    return user;
  }

  // Get / getAll
  @UseGuards(JwtAuthGuard)
  @Get("/getAll")
  async getAll(@Body("username") username: string) {
    if (username !== null) {
      const data = await this.userService.getAll();
      return data.length !== 0
        ? data
        : {
          statusCode: 404,
          message: responseConst["404"]
        };
    }

    throw new HttpException(responseConst["404"], HttpStatus.NOT_FOUND);
  }
}
