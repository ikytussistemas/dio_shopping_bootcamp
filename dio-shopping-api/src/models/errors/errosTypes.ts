import { ApplicationError } from "./application.error";

export class DatabaseError extends ApplicationError<any> {}
export class ForbiddenError extends ApplicationError<void> {}
export class UnprocessableError extends ApplicationError<any> {}
export class ConflictError extends ApplicationError<any> {}
