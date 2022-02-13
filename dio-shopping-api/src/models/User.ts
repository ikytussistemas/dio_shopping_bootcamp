import { Document, Schema, Model, model } from "mongoose";
import { UserType } from "./types";

export interface UserModel extends UserType, Document {}

const UserSchema = new Schema(
  {
    userName: String,
    fullName: String,
    password: String,
    email: String,
    type: String,
  },
  {
    timestamps: true,
  }
);

export const User: Model<UserModel> = model<UserModel>("User", UserSchema);
