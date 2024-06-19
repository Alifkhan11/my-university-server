/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const globalErrorHendleing = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'Something went wrong';

  return res.status(statusCode).json({
    success: false,
    message: message,
    err: err,
  });
  next();
};

export default globalErrorHendleing;
