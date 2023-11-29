import { Module } from '@nestjs/common';
import { P3EvaluasiService } from './p_3_evaluasi.service';

@Module({
  providers: [P3EvaluasiService]
})
export class P3EvaluasiModule {}
