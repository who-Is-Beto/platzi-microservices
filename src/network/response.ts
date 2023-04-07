import { Response, Request } from "express";

export const success = (
  req: Request,
  res: Response,
  message: string,
  status?: number
): void => {
  const statusCode = status || 200;

  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: message
  });
};

export const error = (
  req: Request,
  res: Response,
  message: string,
  status?: number
): void => {
  const statusCode = status || 500;
  res.status(statusCode).send({
    error: false,
    status: statusCode,
    body: message
  });
};
