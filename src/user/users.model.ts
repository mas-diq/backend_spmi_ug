import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    nama_lengkap: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    peran_akun: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export interface User extends mongoose.Document {
  _id: string;
  nama_lengkap: string;
  username: string;
  password: string;
  peran_akun: string;
}