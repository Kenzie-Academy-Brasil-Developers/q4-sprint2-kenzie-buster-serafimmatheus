import { Router } from "express";
import { userController } from "../controllers";
import {
  validateSchema,
  verifyTokenMiddleware,
  verifyUserAlreadyExistsOr404Middleware,
} from "../middlewares";
import { createdUserSchema, loginUserSchema } from "../schemas";
import { serializedUpdateUserShema } from "../schemas/user";

const router = Router();

router.post(
  "/login",
  validateSchema(loginUserSchema),
  userController.LoginController
);

router.get(
  "/users",
  verifyTokenMiddleware,
  userController.getAllUserController
);
router.post(
  "/users",
  validateSchema(createdUserSchema),
  verifyUserAlreadyExistsOr404Middleware,
  userController.createUserController
);

router.patch(
  "/users/:id",
  verifyTokenMiddleware,
  validateSchema(serializedUpdateUserShema),
  userController.updatedUserController
);

export { router };
