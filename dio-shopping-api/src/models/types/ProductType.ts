import { ObjectId } from "mongoose";

export type ProductType = {
  id?: ObjectId | any;
  category: string;
  description: string;
  price: number;
  url_img: string;
  selected: boolean;
};
