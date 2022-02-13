import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import HttpResponse from "../models/http-response.model";

import {
  ConflictError,
  DatabaseError,
  ForbiddenError,
  UnprocessableError,
} from "../models/errors/errosTypes";

const UNEXPECTED_ERROR = new HttpResponse<void>(
  StatusCodes.INTERNAL_SERVER_ERROR,
  { message: "unexpected-error" }
);

const CONFLICT_ERROR = new HttpResponse<void>(StatusCodes.CONFLICT, {
  message: "E-mail informado já foi usado!",
});

const DATABASE_ERROR = new HttpResponse<void>(StatusCodes.BAD_REQUEST, {
  message: "Erro na requisição!",
});

const FORBIDDEN_ERROR = new HttpResponse<void>(StatusCodes.FORBIDDEN, {
  message: "forbidden",
});

const UNPROCESSABLE_ERROR = new HttpResponse<void>(
  StatusCodes.UNPROCESSABLE_ENTITY,
  { message: "Erro nos atributos enviados!" }
);

let errorResponse = UNEXPECTED_ERROR;

export const errorHanddlerMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ConflictError) ErrorMount(CONFLICT_ERROR, error);

  if (error instanceof DatabaseError) ErrorMount(DATABASE_ERROR, error);

  if (error instanceof ForbiddenError) ErrorMount(FORBIDDEN_ERROR, error);

  if (error instanceof UnprocessableError)
    ErrorMount(UNPROCESSABLE_ERROR, error);

  return res.status(errorResponse.status).send(errorResponse.body);
};

const ErrorMount = (type: any, error: any) => {
  errorResponse = type;
  error.message ? (errorResponse.body.message = error.message) : null;
};
