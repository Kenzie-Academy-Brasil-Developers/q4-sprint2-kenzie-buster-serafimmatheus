import { Request, Response } from "express";
import { userService } from "../services";

class UserController {
  createUserController = async (req: Request, res: Response) => {
    const cretedUser = await userService.createUserService(req);

    return res.status(201).json(cretedUser);
  };

  getAllUserController = async (_: Request, res: Response) => {
    const getAllUser = await userService.getAllUserService();

    return res.status(200).json(getAllUser);
  };

  getByIdUserController = async (req: Request, res: Response) => {};

  updatedUserController = async (req: Request, res: Response) => {
    const updateUser = await userService.updateUserService(req);

    return res.status(200).json(updateUser);
  };

  LoginController = async (req: Request, res: Response) => {
    const { statusCode, message } = await userService.loginService(req);

    return res.status(statusCode).json(message);
  };
}

export default new UserController();
