import { Module } from '@nestjs/common';
import { P2PelaksanaanService } from './p_2_pelaksanaan.service';
import { P2PelaksanaanController } from './p_2_pelaksanaan.controller';

@Module({
  providers: [P2PelaksanaanService],
  controllers: [P2PelaksanaanController]
})
export class P2PelaksanaanModule {}
