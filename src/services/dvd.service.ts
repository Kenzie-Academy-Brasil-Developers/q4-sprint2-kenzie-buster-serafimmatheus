import { Request } from "express";
import { stockRepository } from "../repositories";
import dvdRepository from "../repositories/dvd.repository";
import { serializedDvdSchema, serializedDvdsSchema } from "../schemas";
import { IDvdRepo } from "../types";

class DvdService {
  createDvdService = async ({ validated }: Request) => {
    const stock = {
      quantity: (validated as IDvdRepo).quantity,
      price: (validated as IDvdRepo).price,
    };

    const saveStock = await stockRepository.save(stock);

    const createDvd = await dvdRepository.save({
      ...(validated as IDvdRepo),
      stock: saveStock,
    });

    return await serializedDvdSchema.validate(createDvd);
  };

  getAllDvdService = async () => {
    const allDvd = await dvdRepository.allDvd();

    return await serializedDvdsSchema.validate(allDvd, { stripUnknown: true });
  };
}

export default new DvdService();
