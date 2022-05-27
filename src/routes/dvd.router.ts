import { Router } from "express";
import {
  validateSchema,
  verifyTokenMiddleware,
  verifyUserIsAdmMiddleware,
} from "../middlewares";
import { createDvdSchema } from "../schemas";
import { dvdController } from "../controllers";

export const router = Router();

router.post(
  "/dvds/register",
  verifyTokenMiddleware,
  verifyUserIsAdmMiddleware,
  validateSchema(createDvdSchema),
  dvdController.craetedDvdController
);

router.get("/dvds", verifyTokenMiddleware, dvdController.getAllDvdController);
