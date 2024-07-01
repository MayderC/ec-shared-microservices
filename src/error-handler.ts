import {StatusCodes} from "http-status-codes"

export interface IErrorResponse {
  statusCode: number;
  message: string;
  status: string;
  commingFrom: string;
  serializedError?: IErorr;
}

export interface IErorr {
  message: string;
  statusCode: number;
  status: string;
  commingFrom: string;
}

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract status: string;
  commingFrom: string;

  constructor(message: string, commingFrom: string) {
    super(message);
    this.commingFrom = commingFrom;
  }

  serializeErrors(): IErorr{
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
      commingFrom: this.commingFrom
    }
  }
} 

export class BadRequestError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;
  status = "Bad Request";

  constructor(message: string, commingFrom: string) {
    super(message, commingFrom);
  }
}

export class NotFoundError extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;
  status = "Not Found";

  constructor(message: string, commingFrom: string) {
    super(message, commingFrom);
  }
}

export class InternalServerError extends CustomError {
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  status = "Internal Server Error";

  constructor(message: string, commingFrom: string) {
    super(message, commingFrom);
  }
}

export class UnauthorizedError extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;
  status = "Unauthorized";

  constructor(message: string, commingFrom: string) {
    super(message, commingFrom);
  }
}

export class ForbiddenError extends CustomError {
  statusCode = StatusCodes.FORBIDDEN;
  status = "Forbidden";

  constructor(message: string, commingFrom: string) {
    super(message, commingFrom);
  }
}

export class FileTooLargeError extends CustomError {
  statusCode = StatusCodes.REQUEST_TOO_LONG;
  status = "Request Entity Too Large";

  constructor(message: string, commingFrom: string) {
    super(message, commingFrom);
  }
}

export interface ErrnoException extends Error {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
}