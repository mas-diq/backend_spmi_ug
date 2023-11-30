import { Module } from "@nestjs/common";
import { P4PengendalianController } from "./p_4_pengendalian.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { P_4_pengendalianSchema } from "./p_4_pengendalian.model";
import { P4PengendalianService } from "./p_4_pengendalian.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "p_4_pengendalian",
        schema: P_4_pengendalianSchema
      }
    ])
  ],
  controllers: [P4PengendalianController],
  providers: [P4PengendalianService]
})
export class P4PengendalianModule {
}
