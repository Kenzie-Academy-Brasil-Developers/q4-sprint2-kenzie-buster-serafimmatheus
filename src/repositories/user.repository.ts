import { Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

interface IUserRepo {
  save: (user: Partial<User>) => Promise<User>;
  allUser: () => Promise<User[]>;
  retieve: (payload: object) => Promise<User>;
  updateUser: (id: string, payload: Partial<User>) => Promise<UpdateResult>;
}

class UserRepository implements IUserRepo {
  private repo: Repository<User>;

  constructor() {
    this.repo = AppDataSource.getRepository(User);
  }

  save = async (user: Partial<User>) => await this.repo.save(user);

  allUser = async () => await this.repo.find();

  retieve = async (payload: object) =>
    await this.repo.findOneBy({ ...payload });

  updateUser = async (id: string, payload: Partial<User>) =>
    await this.repo.update(id, { ...payload });
}

export default new UserRepository();
