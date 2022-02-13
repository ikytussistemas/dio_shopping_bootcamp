import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { jwtAuthenticationMiddleware } from "../middleware";
import MessageRepository from "../repositories/MessageRepository";

export const MessageRoutes = Router();

MessageRoutes.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const messages = await MessageRepository.findAll();

      if (!messages) {
        return res.sendStatus(StatusCodes.NO_CONTENT);
      }

      res.status(StatusCodes.OK).send(messages);
    } catch (error) {
      return next(error);
    }
  }
);

MessageRoutes.get(
  "/:id",
  jwtAuthenticationMiddleware,
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const message = await MessageRepository.findById(id);

      if (!message) {
        return res.sendStatus(StatusCodes.NO_CONTENT);
      }

      res.status(StatusCodes.OK).send(message);
    } catch (error) {
      return next(error);
    }
  }
);

MessageRoutes.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const message = await MessageRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(message);
    } catch (error) {
      return next(error);
    }
  }
);

MessageRoutes.put(
  "/:id",
  jwtAuthenticationMiddleware,
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const message = req.body;
      message.id = id;
      const updatedMessage = await MessageRepository.update(message);
      return res.status(StatusCodes.OK).json(updatedMessage);
    } catch (error) {
      return next(error);
    }
  }
);

MessageRoutes.delete(
  "/:id",
  jwtAuthenticationMiddleware,
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      await MessageRepository.remove(id);
      return res.sendStatus(StatusCodes.OK);
    } catch (error) {
      return next(error);
    }
  }
);
