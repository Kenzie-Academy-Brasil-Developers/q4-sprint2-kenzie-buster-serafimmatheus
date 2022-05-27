import { Request, Response } from "express";
import cartService from "../services/cart.service";

class CartController {
  createCartController = async (req: Request, res: Response) => {
    const createCart = await cartService.createCartService(req);

    return res.status(201).json(createCart);
  };
}

export default new CartController();
