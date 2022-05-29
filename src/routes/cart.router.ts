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

router.put(
  "/carts/pay/:id",
  verifyTokenMiddleware,
  cartController.updatedCartController
);

router.get(
  "/carts",
  verifyTokenMiddleware,
  cartController.getAllCartController
);

export { router };
