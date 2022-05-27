import { NextFunction, Request, Response } from "express";
import { User } from "../entities/User";
import { ErrorHandlers } from "../errors";
import { userRepository } from "../repositories";

const verifyUserAlreadyExistsOr404Middleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await userRepository.retieve({
    email: (req.validated as User).email,
  });

  if (user) {
    throw new ErrorHandlers(409, "Email is already in use.");
  }

  return next();
};

export { verifyUserAlreadyExistsOr404Middleware };
