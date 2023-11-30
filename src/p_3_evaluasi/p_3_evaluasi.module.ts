import { Module } from "@nestjs/common";
import { P3EvaluasiService } from "./p_3_evaluasi.service";
import { MongooseModule } from "@nestjs/mongoose";
import { P_3_evaluasiSchema } from "./p_3_evaluasi.model";
import { P3EvaluasiController } from "./p_3_evaluasi.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "p_3_evaluasi",
        schema: P_3_evaluasiSchema
      }
    ])
  ],
  controllers: [P3EvaluasiController],
  providers: [P3EvaluasiService]
})
export class P3EvaluasiModule {
}
