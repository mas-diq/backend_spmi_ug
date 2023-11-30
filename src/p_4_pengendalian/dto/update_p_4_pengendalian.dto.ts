import { Create_p_4_pengendalianDto } from "./create_p_4_pengendalian.dto";
import { PartialType } from "@nestjs/mapped-types";

export class Update_p_4_pengendalianDto extends PartialType(
  Create_p_4_pengendalianDto
) {
}
