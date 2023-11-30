import { Create_p_3_evaluasiDto } from "./create_p_3_evaluasi.dto";
import { PartialType } from "@nestjs/mapped-types";

export class Update_p_3_evaluasiDto extends PartialType(
  Create_p_3_evaluasiDto
) {
}
