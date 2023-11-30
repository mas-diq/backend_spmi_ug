import { Module } from "@nestjs/common";
import { P2PelaksanaanService } from "./p_2_pelaksanaan.service";
import { P2PelaksanaanController } from "./p_2_pelaksanaan.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { P_2_pelaksanaanSchema } from "./p_2_pelaksanaan.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: "p_2_pelaksanaan",
        schema: P_2_pelaksanaanSchema
      }
    ])
  ],
  providers: [P2PelaksanaanService],
  controllers: [P2PelaksanaanController]
})
export class P2PelaksanaanModule {
}
