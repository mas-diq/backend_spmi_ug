import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { P2PelaksanaanModule } from "./p_2_pelaksanaan/p_2_pelaksanaan.module";
import { P3EvaluasiModule } from "./p_3_evaluasi/p_3_evaluasi.module";
import { P1PenetapanModule } from "./p_1_penetapan/p_1_penetapan.module";
import { P4PengendalianModule } from "./p_4_pengendalian/p_4_pengendalian.module";
import { P5PengingkatanModule } from "./p_5_pengingkatan/p_5_pengingkatan.module";
import { UserModule } from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";

ConfigModule.forRoot();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_STRING_LOCAL),
    P1PenetapanModule,
    P2PelaksanaanModule,
    P3EvaluasiModule,
    P4PengendalianModule,
    P5PengingkatanModule,
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
