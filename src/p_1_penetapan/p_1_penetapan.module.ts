import { Module } from '@nestjs/common';
import { P1PenetapanService } from './p_1_penetapan.service';
import { P1PenetapanController } from './p_1_penetapan.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { P_1_penetapanSchema } from "./p_1_penetapan.model";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'p_1_penetapan',
        schema: P_1_penetapanSchema,
      },
    ]),
  ],
  providers: [P1PenetapanService],
  controllers: [P1PenetapanController]
})
export class P1PenetapanModule {}
