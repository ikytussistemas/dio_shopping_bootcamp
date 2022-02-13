import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import JWT from "jsonwebtoken";

import { ForbiddenError } from "../models/errors/errosTypes";

export async function jwtAuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers["authorization"];

    if (!authorizationHeader) {
      throw new ForbiddenError({ log: "Credenciais não informadas" });
    }

    const [authenticationType, token] = authorizationHeader.split(" ");

    if (authenticationType !== "Bearer" || !token) {
      throw new ForbiddenError({ log: "Tipo de authenticação inválida" });
    }

    try {
      const tokenPayload = JWT.verify(token, `${process.env.SECRET_KEY}`);

      if (typeof tokenPayload !== "object" || !tokenPayload.sub) {
        throw new ForbiddenError({ log: "Token Inválido" });
      }

      const user = {
        uuid: tokenPayload.sub,
        userName: tokenPayload.username,
      };

      req.user = user;
      next();
    } catch (error) {
      throw new ForbiddenError({ log: "Token Inválido" });
    }
  } catch (error) {
    next(error);
  }
}
