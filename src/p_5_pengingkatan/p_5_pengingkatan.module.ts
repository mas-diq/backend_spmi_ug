import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { P_5_peningkatanSchema } from "./p_5_pengingkatan.model";
import { P5PengingkatanController } from "./p_5_pengingkatan.controller";
import { P5PengingkatanService } from "./p_5_pengingkatan.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "p_5_peningkatan",
        schema: P_5_peningkatanSchema
      }
    ])
  ],
  controllers: [P5PengingkatanController],
  providers: [P5PengingkatanService]
})
export class P5PengingkatanModule {
}
