import { Document, Schema, Model, model } from "mongoose";
import { MessageType } from "./types";

export interface MessageModel extends MessageType, Document {}

const MessageSchema = new Schema(
  {
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

export const Message: Model<MessageModel> = model<MessageModel>(
  "Message",
  MessageSchema
);
