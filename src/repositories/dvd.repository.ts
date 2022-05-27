import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Dvd } from "../entities/Dvd";

interface IDvdRepo {
  save: (dvd: Partial<Dvd>) => Promise<Dvd>;
  allDvd: () => Promise<Dvd[]>;
  retieve: (payload: object) => Promise<Dvd>;
  updateDvd: (id: string, payload: Partial<Dvd>) => Promise<UpdateResult>;
}

class DvdRepository implements IDvdRepo {
  private repo: Repository<Dvd>;

  constructor() {
    this.repo = AppDataSource.getRepository(Dvd);
  }

  save = async (dvd: Partial<Dvd>) => await this.repo.save(dvd);

  allDvd = async () => await this.repo.find();

  retieve = async (payload: object) =>
    await this.repo.findOneBy({ ...payload });

  updateDvd = async (id: string, payload: Partial<Dvd>) =>
    await this.repo.update(id, { ...payload });
}

export default new DvdRepository();
