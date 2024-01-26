import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class create_p_1_penetapanDto {
  @IsNotEmpty()
  @IsString()
  standar: string;

  @IsNotEmpty()
  @IsString()
  indikator: string;

  @IsString()
  dokumen: string;

  @IsNumber()
  capaian_ts_0: number;

  @IsNumber()
  capaian_ts_1: number;

  @IsNumber()
  capaian_ts_2: number;

  @IsNumber()
  capaian_ts_3: number;

  @IsNumber()
  capaian_ts_4: number;

  @IsNumber()
  capaian_ts_5: number;
}

export class update_p_1_penetapanDto extends PartialType(create_p_1_penetapanDto) {
}