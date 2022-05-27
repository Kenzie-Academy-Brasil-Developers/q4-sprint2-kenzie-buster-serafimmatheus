import { NextFunction, Request, Response } from "express";
import { ErrorHandlers } from "../errors";

const verifyUserIsAdmMiddleware = (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  if (!req.decoded.isAdm) {
    throw new ErrorHandlers(401, "Missing admin permission");
  }

  return next();
};

export { verifyUserIsAdmMiddleware };
