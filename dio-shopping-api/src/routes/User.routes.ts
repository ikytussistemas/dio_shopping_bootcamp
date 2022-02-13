import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { jwtAuthenticationMiddleware } from "../middleware";
import UserRepository from "../repositories/UserRepository";

export const UserRoutes = Router();

UserRoutes.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserRepository.findAll();
    if (!users) {
      return res.sendStatus(StatusCodes.NO_CONTENT);
    }

    res.status(StatusCodes.OK).send(users);
  } catch (error) {
    return next(error);
  }
});

UserRoutes.get(
  "/:id",
  jwtAuthenticationMiddleware,
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const user = await UserRepository.findById(id);

      if (!user) {
        return res.sendStatus(StatusCodes.NO_CONTENT);
      }

      res.status(StatusCodes.OK).send(user);
    } catch (error) {
      return next(error);
    }
  }
);

UserRoutes.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await UserRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(user);
    } catch (error) {
      return next(error);
    }
  }
);

UserRoutes.put(
  "/:id",
  jwtAuthenticationMiddleware,
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const user = req.body;
      user.id = id;
      const updatedUser = await UserRepository.update(user);
      return res.status(StatusCodes.OK).json(updatedUser);
    } catch (error) {
      return next(error);
    }
  }
);

UserRoutes.delete(
  "/:id",
  async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      await UserRepository.remove(id);
      return res.sendStatus(StatusCodes.OK);
    } catch (error) {
      return next(error);
    }
  }
);
