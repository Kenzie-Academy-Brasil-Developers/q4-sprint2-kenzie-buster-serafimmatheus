import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify, VerifyErrors } from "jsonwebtoken";
import { User } from "../entities/User";
import { ErrorHandlers } from "../errors";
import * as dotenv from "dotenv";

dotenv.config();

const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new ErrorHandlers(400, "Missing authorization token");
  }

  return verify(
    token,
    process.env.SECRET_KEY,
    (error: VerifyErrors, decoded: string | JwtPayload) => {
      if (error) {
        throw new ErrorHandlers(401, error.message);
      }

      req.decoded = decoded as User;

      return next();
    }
  );
};

export { verifyTokenMiddleware };
