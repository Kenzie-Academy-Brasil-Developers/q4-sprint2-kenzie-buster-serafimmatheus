import { Router } from "express";
import { validateSchema, verifyTokenMiddleware } from "../middlewares";
import { createDvdSchema } from "../schemas";
import { dvdController } from "../controllers";

export const router = Router();

router.post(
  "/dvds/register",
  verifyTokenMiddleware,
  validateSchema(createDvdSchema),
  dvdController.craetedDvdController
);

router.get("/dvds", verifyTokenMiddleware, dvdController.getAllDvdController);
