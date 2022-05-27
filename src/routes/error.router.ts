import "express-async-errors";
import { NextFunction, Request, Response } from "express";
import { errorHandlers } from "../errors";

const errors = (err: Error, _: Request, res: Response, __: NextFunction) => {
  return errorHandlers(err, res);
};

export { errors };
