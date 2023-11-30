import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./users.model";
import { responseConst } from "../responseConst";

@Injectable()
export class UserService {
  constructor(@InjectModel("user") private readonly userModel: Model<User>) {
  }

  async insertUser(
    nama: string,
    username: string,
    password: string,
    jabatan: string
  ) {
    // Please make this variables name same as the request body
    const nama_lengkap = nama.toUpperCase();
    const jabatan_akun = jabatan.toUpperCase();

    const newUser = new this.userModel({
      nama_lengkap,
      username,
      password,
      jabatan_akun
    });

    try {
      await newUser.save();
      return newUser;
    } catch (e) {
      throw new Error(`${responseConst["400"]} - ${e}`);
    }
  }

  // Get / getAll
  async getAll() {
    try {
      return this.userModel.find();
    } catch (e) {
      throw new Error(`${responseConst["404"]} - ${e}`);
    }
  }

  async getDetail(username: string) {
    try {
      return this.userModel.findOne({ username: username });
    } catch (e) {
      throw new Error(`${responseConst["404"]} - ${e}`);
    }
  }

  async getUserId(username: string) {
    try {
      let resId = await this.userModel
        .findOne({ username: username })
        .select("id");
      return resId.id;
    } catch (e) {
      throw new Error(`${responseConst["404"]} - ${e}`);
    }
  }

  async getUserUsername(username: string) {
    try {
      let resUsername = await this.userModel
        .findOne({ username: username })
        .select("username");
      return resUsername.username;
    } catch (e) {
      throw new Error(`${responseConst["404"]} - ${e}`);
    }
  }

  async getUserNamaLengkap(username: string) {
    try {
      let resNamaLengkap = await this.userModel
        .findOne({ username: username })
        .select("nama_lengkap");
      return resNamaLengkap.nama_lengkap;
    } catch (e) {
      throw new Error(`${responseConst["404"]} - ${e}`);
    }
  }

  async getUserJabatanAkun(username: string) {
    try {
      let resJabatanAkun = await this.userModel
        .findOne({ username: username })
        .select("jabatan_akun");
      return resJabatanAkun.jabatan_akun;
    } catch (e) {
      throw new Error(`${responseConst["404"]} - ${e}`);
    }
  }
}
