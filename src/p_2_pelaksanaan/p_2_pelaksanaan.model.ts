import * as mongoose from "mongoose";


export const P_2_pelaksanaanSchema = new mongoose.Schema({
    kode_data: {
      type: String,
      required: true,
      default: "K11VM"
    },
    keterangan_data: {
      type: String,
      required: true
    },
    tahun_2023: {
      type: String,
      default: "null"
    },
    dokumen_2023: {
      type: String,
      default: "null"
    },
    tahun_2024: {
      type: String,
      default: "null"
    },
    dokumen_2024: {
      type: String,
      default: "null"
    },
    tahun_2025: {
      type: String,
      default: "null"
    },
    dokumen_2025: {
      type: String,
      default: "null"
    },
    tahun_2026: {
      type: String,
      default: "null"
    },
    dokumen_2026: {
      type: String,
      default: "null"
    }
  },
  { timestamps: true }
);

export interface P_2_pelaksanaanModel extends mongoose.Document {
  kode_data: string;
  keterangan_data: string;
  tahun_2023: string;
  dokumen_2023: string;
  tahun_2024: string;
  dokumen_2024: string;
  tahun_2025: string;
  dokumen_2025: string;
  tahun_2026: string;
  dokumen_2026: string;
}