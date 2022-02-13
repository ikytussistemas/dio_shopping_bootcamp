import { Product } from "./../models/Product";
import { ProductType } from "../models/types";
import {
  UnprocessableError,
  DatabaseError,
  ConflictError,
} from "../models/errors/errosTypes";

class ProductRepository {
  async findAll(): Promise<any> {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error();
    }
  }

  async findById(id: string) {
    try {
      const product = await Product.findById(id);
      return !product ? null : product;
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao buscar produto por id!",
        data: error,
      });
    }
  }

  async create(user: ProductType): Promise<ProductType> {
    const { category, description, price, url_img, selected } = user;

    if (!description || !price || !category) {
      throw new UnprocessableError({
        log: "Por favor Preencha todos os dados obrigatórios!",
      });
    }

    const productExisistes = await Product.findOne({
      description: description,
    });

    if (productExisistes) {
      throw new ConflictError({
        log: `Já existe um produto com o nome: ${description}`,
      });
    }

    try {
      const product = await Product.create({
        category,
        description,
        price,
        url_img,
        selected,
      });
      return product;
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao registrar o produto",
        data: error,
      });
    }
  }

  async update(product: ProductType): Promise<void> {
    try {
      await Product.updateOne(product);
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao tentar atualizar o produto",
        data: error,
      });
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const removeProduct = await Product.deleteOne({ _id: id });
    } catch (error) {
      throw new DatabaseError({
        log: "Erro ao tentar remover o produto",
        data: error,
      });
    }
  }

  async removeAll(): Promise<void> {
    try {
      return await Product.remove();
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ProductRepository();
