import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { jwtAuthenticationMiddleware } from "../middleware";
import ProductRepository from "../repositories/ProductRepository";

export const ProductRoutes = Router();

ProductRoutes.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await ProductRepository.findAll();

      if (!products) {
        return res.sendStatus(StatusCodes.NO_CONTENT);
      }

      res.status(StatusCodes.OK).send(products);
    } catch (error) {
      return next(error);
    }
  }
);

ProductRoutes.get(
  "/:id",
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const product = await ProductRepository.findById(id);

      if (!product) {
        return res.sendStatus(StatusCodes.NO_CONTENT);
      }

      res.status(StatusCodes.OK).send(product);
    } catch (error) {
      return next(error);
    }
  }
);

ProductRoutes.post(
  "/",
  jwtAuthenticationMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await ProductRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(product);
    } catch (error) {
      return next(error);
    }
  }
);

ProductRoutes.put(
  "/:id",
  jwtAuthenticationMiddleware,
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const product = req.body;
      product.id = id;
      const updatedProduct = await ProductRepository.update(product);
      return res.status(StatusCodes.OK).json(updatedProduct);
    } catch (error) {
      return next(error);
    }
  }
);

ProductRoutes.delete(
  "/:id",
  jwtAuthenticationMiddleware,
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      await ProductRepository.remove(id);
      return res.sendStatus(StatusCodes.OK);
    } catch (error) {
      return next(error);
    }
  }
);
