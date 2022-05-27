import { Router } from "express";
import { cartController } from "../controllers";

import { validateSchema, verifyTokenMiddleware } from "../middlewares";
import { cretedCartSchema } from "../schemas";

const router = Router();

router.post(
  "/dvds/buy/:id",
  verifyTokenMiddleware,
  validateSchema(cretedCartSchema),
  cartController.createCartController
);

export { router };
