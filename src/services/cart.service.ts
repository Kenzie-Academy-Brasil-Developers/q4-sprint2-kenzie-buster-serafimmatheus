import { Request } from "express";
import { Dvd } from "../entities/Dvd";
import { User } from "../entities/User";
import { ErrorHandlers } from "../errors";
import { cartRepository, dvdRepository, userRepository } from "../repositories";
import { serializedCartSchema } from "../schemas";
import { serializedCartPaySchema } from "../schemas/cart";
import { IQuantity } from "../types";

class CartService {
  createCartService = async ({ validated, params, decoded }: Request) => {
    const user: User = await userRepository.retieve({ id: decoded.id });

    const dvd: Dvd = await dvdRepository.retieve({ id: params.id });

    if (!dvd) {
      throw new ErrorHandlers(404, "dvd not found.");
    }

    if ((validated as IQuantity).quantity <= dvd.stock.price) {
      const totalPrice = {
        total: (validated as IQuantity).quantity * dvd.stock.price,
      };

      const itemsCart = await cartRepository.save({ ...totalPrice, user, dvd });

      return await serializedCartSchema.validate(itemsCart, {
        stripUnknown: true,
      });
    }

    throw new ErrorHandlers(
      422,
      `current stock: ${dvd.stock.quantity}, received demand ${
        (validated as IQuantity).quantity
      }`
    );
  };

  updatedCartService = async ({ params }: Request) => {
    const cartPay = await cartRepository.retieve({ id: params.id });

    if (!cartPay.paid) {
      const paidAproved = { paid: true };

      const cartUpdated = await cartRepository.updateCart(params.id, {
        ...paidAproved,
      });

      const cartPay2 = await cartRepository.retieve({ id: params.id });

      return await serializedCartPaySchema.validate(cartPay2, {
        stripUnknown: true,
      });
    }

    throw new ErrorHandlers(400, "payment has already been approved");
  };
}

export default new CartService();
