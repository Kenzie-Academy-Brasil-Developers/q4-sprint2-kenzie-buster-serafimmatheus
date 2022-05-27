import { User } from "../entities/User";
import { IDvdRepo } from "../types";

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated: User | IDvdRepo;
      decoded: User;
    }
  }
}
