import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { P_1_penetapanModel } from "./p_1_penetapan.model";
import { Create_p_1_penetapanDto } from "./dto/create_p_1_penetapan.dto";
import { Update_p_1_penetapanDto } from "./dto/update_p_1_penetapan.dto";
import * as AWS from "aws-sdk";

@Injectable()
export class P1PenetapanService {

  constructor(
    @InjectModel("p_1_penetapan")
    private readonly localModel: Model<P_1_penetapanModel>
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
    payload: Create_p_1_penetapanDto
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
    payload: Update_p_1_penetapanDto
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

  // Upload file to AWS S3
  AWS_S3_BUCKET = `${process.env.AWS_BUCKET_NAME}`;
  s3 = new AWS.S3({
    accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
    secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`
  });

  async uploadFile(file: any, kode_data: string) {
    return await this.s3_upload(
      file.buffer,
      this.AWS_S3_BUCKET,
      kode_data,
      file.mimetype
    );
  }

  async s3_upload(file, bucket, name, mimetype) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL: "public-read",
      ContentType: mimetype,
      ContentDisposition: "inline",
      CreateBucketConfiguration: {
        LocationConstraint: "ap-southeast-1"
      }
    };

    try {
      return await this.s3.upload(params).promise();
    } catch (e) {
      throw new Error(`Terjadi kesalahan : ${e}`);
    }
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
