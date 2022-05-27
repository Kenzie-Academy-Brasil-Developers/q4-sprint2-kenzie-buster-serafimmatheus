import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Cart } from "../entities/Cart";

interface ICartRepo {
  save: (cart: Partial<Cart>) => Promise<Cart>;
  allCart: () => Promise<Cart[]>;
  retieve: (payload: object) => Promise<Cart>;
  updateCart: (id: string, payload: Partial<Cart>) => Promise<UpdateResult>;
}

class CartRepository implements ICartRepo {
  private repo: Repository<Cart>;

  constructor() {
    this.repo = AppDataSource.getRepository(Cart);
  }

  save = async (cart: Partial<Cart>) => await this.repo.save(cart);

  allCart = async () => await this.repo.find();

  retieve = async (payload: object) =>
    await this.repo.findOneBy({ ...payload });

  updateCart = async (id: string, payload: Partial<Cart>) =>
    await this.repo.update(id, { ...payload });
}

export default new CartRepository();
