import { Create_p_2_pelaksanaanDto } from "./create_p_2_pelaksanaan.dto";
import { PartialType } from "@nestjs/mapped-types";

export class Update_p_2_pelaksanaanDto extends PartialType(
  Create_p_2_pelaksanaanDto
) {
}
