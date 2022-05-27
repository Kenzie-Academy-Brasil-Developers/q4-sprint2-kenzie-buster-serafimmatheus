import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Stock } from "../entities/Stock";

interface IStockRepo {
  save: (stock: Partial<Stock>) => Promise<Stock>;
  allStock: () => Promise<Stock[]>;
  retieve: (payload: object) => Promise<Stock>;
  updateStock: (id: string, payload: Partial<Stock>) => Promise<UpdateResult>;
}

class StockRepository implements IStockRepo {
  private repo: Repository<Stock>;

  constructor() {
    this.repo = AppDataSource.getRepository(Stock);
  }

  save = async (stock: Partial<Stock>) => await this.repo.save(stock);

  allStock = async () => await this.repo.find();

  retieve = async (payload: object) =>
    await this.repo.findOneBy({ ...payload });

  updateStock = async (id: string, payload: Partial<Stock>) =>
    await this.repo.update(id, { ...payload });
}

export default new StockRepository();
