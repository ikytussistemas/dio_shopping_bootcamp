import { NextFunction, Request, Response } from "express";
import { ForbiddenError } from "../models/errors/errosTypes";
import UserRepository from "../repositories/UserRepository";

export async function basicAuthenticationMiddleware(
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

    if (authenticationType !== "Basic" || !token) {
      throw new ForbiddenError({ log: "Tipo de authenticação inválida" });
    }

    const tokenContent = Buffer.from(token, "base64").toString("utf-8");
    const [username, password] = tokenContent.split(":");

    if (!username || !password) {
      throw new ForbiddenError({ log: "Credenciais não preenchidas" });
    }

    const user = await UserRepository.findByUsernameAndPassword(
      username,
      password
    );

    if (!user) {
      throw new ForbiddenError({ log: "Usuário ou senha inválidos!" });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}
