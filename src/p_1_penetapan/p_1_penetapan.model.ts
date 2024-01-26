import * as mongoose from "mongoose";

export const P_1_penetapanSchema = new mongoose.Schema({
    standar: {
      type: String,
      required: true
    },
    indikator: {
      type: String,
      required: true
    },
    dokumen: {
      type: String,
      default: "null"
    },
    capaian_ts_0: {
      type: Number,
      default: 0.0
    },
    capaian_ts_1: {
      type: Number,
      default: 0.0
    },
    capaian_ts_2: {
      type: Number,
      default: 0.0
    },
    capaian_ts_3: {
      type: Number,
      default: 0.0
    },
    capaian_ts_4: {
      type: Number,
      default: 0.0
    },
    capaian_ts_5: {
      type: Number,
      default: 0.0
    }
  },
  { timestamps: true }
);

export interface P_1_penetapanModel extends mongoose.Document {
  standar: string;
  indikator: string;
  dokumen: string;
  capaian_ts_0: number;
  capaian_ts_1: number;
  capaian_ts_2: number;
  capaian_ts_3: number;
  capaian_ts_4: number;
  capaian_ts_5: number;
}