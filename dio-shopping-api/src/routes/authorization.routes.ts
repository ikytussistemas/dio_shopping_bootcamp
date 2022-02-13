import "dotenv/config";
import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from "http-status-codes";
import JWT, { SignOptions } from "jsonwebtoken";

import {
  basicAuthenticationMiddleware,
  jwtAuthenticationMiddleware,
} from "../middleware";
import { ForbiddenError } from "../models/errors/errosTypes";

export const autorizationRouter = Router();

autorizationRouter.post(
  "/token",
  basicAuthenticationMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!user) {
        throw new ForbiddenError({ log: "Usuário não informado!" });
      }

      const jwtPayload = { username: user.userName, email: user.email, type: user.type };
      const jwtOptions: SignOptions = { subject: user?.id, expiresIn: "4320m" };
      const secretKey = `${process.env.SECRET_KEY}`;

      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

      return res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);
