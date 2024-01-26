import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { P_1_penetapanModel } from "./p_1_penetapan.model";
import { create_p_1_penetapanDto, update_p_1_penetapanDto } from "./p_1_penetapan.dto";
import { AwsService } from "../aws/aws.service";

@Injectable()
export class P1PenetapanService {

  constructor(
    @InjectModel("p_1_penetapan")
    private readonly localModel: Model<P_1_penetapanModel>,
    private readonly awsService: AwsService
  ) {
  }

  // getKodeData
  async getKodeData() {
    let data = await this.localModel.countDocuments();
    return `P_1_Penetapan_${data + 1}`;
  }

  // Post / createData
  async createData(
    kode_data: string,
    payload: create_p_1_penetapanDto
  ) {
    const newData = new this.localModel({
      kode_data,
      ...payload
    });
    try {
      return await newData.save();
    } catch (e) {
      throw new Error(`Terjadi kesalahan : ${e}`);
    }
  }

  // Patch / editData
  async editData(
    id: string,
    payload: update_p_1_penetapanDto
  ) {
    try {
      return await this.localModel.findByIdAndUpdate(id, payload, {
        new: true
      });
    } catch (e) {
      throw new Error(`Terjadi kesalahan : ${e}`);
    }
  }

  // Get / getAll
  async getAll() {
    try {
      return await this.localModel.find();
    } catch (e) {
      throw new Error(`Terjadi kesalahan : ${e}`);
    }
  }

  // Get / getOneData
  async getOneData(id: string) {
    try {
      return await this.localModel.findById(id);
    } catch (e) {
      throw new Error(`Terjadi kesalahan : ${e}`);
    }
  }

  async uploadFile(file: any, kode_data: string) {
    return await this.awsService.uploadToS3(
      file.buffer,
      this.awsService.AWS_S3_BUCKET,
      kode_data,
      file.mimetype
    );
  }

  // Delete / delete
  async delete(id: string) {
    try {
      return this.localModel.findByIdAndDelete(id);
    } catch (e) {
      throw new Error(`Terjadi kesalahan : ${e}`);
    }
  }
}
