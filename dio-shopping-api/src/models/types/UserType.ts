import { ObjectId } from "mongoose";

export type UserType = {
  id?: ObjectId | any;
  userName: string;
  fullName: string;
  password: string;
  email: string;
  type: "Admim" | "User";
};

export type UserResponseType = {
  id?: ObjectId | any;
  userName: string;
  email: string;
};
