import {
  IsNotEmpty,
  IsString
} from "class-validator";

export class Create_p_4_pengendalianDto {
  @IsNotEmpty()
  @IsString()
  keterangan_data: string;

  @IsString()
  tahun_2023: string;

  @IsString()
  dokumen_2023: string;

  @IsString()
  tahun_2024: string;

  @IsString()
  dokumen_2024: string;

  @IsString()
  tahun_2025: string;

  @IsString()
  dokumen_2025: string;

  @IsString()
  tahun_2026: string;

  @IsString()
  dokumen_2026: string;
}

