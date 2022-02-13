import { Document, Schema, Model, model } from "mongoose";
import { ProductType } from "./types";

export interface ProductModel extends ProductType, Document {}

const ProductSchema = new Schema(
  {
    category: String,
    description: String,
    price: Number,
    url_img: String,
    selected: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Product: Model<ProductModel> = model<ProductModel>(
  "Product",
  ProductSchema
);
