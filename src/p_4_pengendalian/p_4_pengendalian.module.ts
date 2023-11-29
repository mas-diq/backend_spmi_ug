import { Module } from '@nestjs/common';
import { P4PengendalianController } from './p_4_pengendalian.controller';

@Module({
  controllers: [P4PengendalianController]
})
export class P4PengendalianModule {}
