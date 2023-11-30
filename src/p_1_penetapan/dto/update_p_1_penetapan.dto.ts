import { Create_p_1_penetapanDto } from "./create_p_1_penetapan.dto";
import { PartialType } from "@nestjs/mapped-types";

export class Update_p_1_penetapanDto extends PartialType(
  Create_p_1_penetapanDto
) {
}
