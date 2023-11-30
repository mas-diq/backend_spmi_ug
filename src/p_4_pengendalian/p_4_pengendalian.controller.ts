import {
  Body,
  Controller, Delete,
  Get,
  HttpException,
  HttpStatus, ParseFilePipeBuilder,
  Patch,
  Post, Query, UploadedFile,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { responseConst } from "../responseConst";
import { FileInterceptor } from "@nestjs/platform-express";
import { P4PengendalianService } from "./p_4_pengendalian.service";
import { Create_p_4_pengendalianDto } from "./dto/create_p_4_pengendalian.dto";
import { Update_p_4_pengendalianDto } from "./dto/update_p_4_pengendalian.dto";

@Controller("p_4")
export class P4PengendalianController {

  constructor(
    private readonly localService: P4PengendalianService
  ) {
  }


  // Post / createData
  @UseGuards(JwtAuthGuard)
  @Post("/createData")
  async createData(
    @Body() createDataDto: Create_p_4_pengendalianDto
  ) {
    let kodeData = await this.localService.getKodeData();
    let data = await this.localService.createData(kodeData, createDataDto);
    if (data) {
      return {
        message: "Data berhasil diunggah",
        data
      };
    }
    throw new HttpException(responseConst["422"], HttpStatus.UNPROCESSABLE_ENTITY);
  }

  // Patch / editData
  @UseGuards(JwtAuthGuard)
  @Patch("/editData")
  async editDataForEditor(
    @Body("id") id: string,
    @Body() updateDataDto: Update_p_4_pengendalianDto
  ) {
    let data = await this.localService.editData(id, updateDataDto);
    if (data) {
      return {
        message: "Data berhasil dirubah",
        data
      };
    }
    throw new HttpException(responseConst["406"], HttpStatus.NOT_ACCEPTABLE);
  }

  // Get / getAll
  @UseGuards(JwtAuthGuard)
  @Get("/getAll")
  async getAll() {
    let data = await this.localService.getAll();
    if (data !== null) {
      return {
        message: "Data berhasil didapatkan",
        data
      };
    }
    throw new HttpException(responseConst["404"], HttpStatus.NOT_FOUND);
  }


  // Post / uploadFile
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("file"))
  @Post("/uploadFile")
  async uploadFile(
    @Query("tahun") tahun: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: "pdf" })
        .addMaxSizeValidator({ maxSize: 5 * 1024 * 1024 })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
        })
    )
      file: Express.Multer.File
  ) {
    let kodeData = await this.localService.getKodeData();
    let kodeFile = `${kodeData}_${tahun}`;

    let data = await this.localService.uploadFile(file, kodeFile);

    if (data) {
      return {
        message: "Dokumen berhasil diunggah",
        data
      };
    }
    throw new HttpException(responseConst["400"], HttpStatus.BAD_REQUEST);
  }

  // Delete / delete
  @UseGuards(JwtAuthGuard)
  @Delete("delete")
  async deleteOne(
    @Query("id") id: string
  ) {
    let data = this.localService.getOneData(id);
    if (data == null) {
      throw new HttpException(responseConst["404"], HttpStatus.NOT_FOUND);
    }
    await this.localService.delete(id);
    return {
      message: "Data berhasil dihapus"
    };
  }
}
