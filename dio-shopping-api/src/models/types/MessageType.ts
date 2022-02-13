import { ObjectId } from "mongoose";

export type MessageType = {
  id?: ObjectId | any;
  email: string;
  message: string;
};
