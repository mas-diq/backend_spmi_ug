import { Create_p_5_peningkatanDto } from "./create_p_5_peningkatan.dto";
import { PartialType } from "@nestjs/mapped-types";

export class Update_p_5_peningkatanDto extends PartialType(
  Create_p_5_peningkatanDto
) {
}
