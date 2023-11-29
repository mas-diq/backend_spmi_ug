import { Module } from '@nestjs/common';
import { P1PenetapanService } from './p_1_penetapan.service';
import { P1PenetapanController } from './p_1_penetapan.controller';

@Module({
  providers: [P1PenetapanService],
  controllers: [P1PenetapanController]
})
export class P1PenetapanModule {}
