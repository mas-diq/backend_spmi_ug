import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "./users.model";
import { Bad_request_400 } from "../_utils/custom.exeptions";

@Injectable()
export class UserService {
  constructor(@InjectModel("user") private readonly userModel: Model<User>) {
  }

  async insertUser(
    nama: string,
    username: string,
    password: string,
    peran: string
  ) {
    // Please make this variables name same as the request body
    const nama_lengkap = nama.toUpperCase();
    const peran_akun = peran.toUpperCase();

    const newUser = new this.userModel({
      nama_lengkap,
      username,
      password,
      peran_akun
    });

    try {
      await newUser.save();
      return newUser;
    } catch (e) {
      throw new Bad_request_400();
    }
  }

  // Get / getAll
  async getAll() {
    try {
      return this.userModel.find();
    } catch (e) {
      throw new Bad_request_400();
    }
  }

  async getDetail(username: string) {
    try {
      return this.userModel.findOne({ username: username });
    } catch (e) {
      throw new Bad_request_400();
    }
  }

  async getUserId(username: string) {
    try {
      let resId = await this.userModel
        .findOne({ username: username })
        .select("id");
      return resId.id;
    } catch (e) {
      throw new Bad_request_400();
    }
  }

  async getUserUsername(username: string) {
    try {
      let resUsername = await this.userModel
        .findOne({ username: username })
        .select("username");
      return resUsername.username;
    } catch (e) {
      throw new Bad_request_400();
    }
  }

  async getUserNamaLengkap(username: string) {
    try {
      let resNamaLengkap = await this.userModel
        .findOne({ username: username })
        .select("nama_lengkap");
      return resNamaLengkap.nama_lengkap;
    } catch (e) {
      throw new Bad_request_400();
    }
  }
}

