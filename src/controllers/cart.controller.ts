import { Request, Response } from "express";
import cartService from "../services/cart.service";

class CartController {
  createCartController = async (req: Request, res: Response) => {
    const createCart = await cartService.createCartService(req);

    return res.status(201).json(createCart);
  };

  updatedCartController = async (req: Request, res: Response) => {
    const cartPay = await cartService.updatedCartService(req);

    return res.status(200).json({ cart: cartPay });
  };

  getAllCartController = async (_: Request, res: Response) => {
    const getAllCart = await cartService.getAllCarts();

    return res.status(200).json(getAllCart);
  };
}

export default new CartController();
