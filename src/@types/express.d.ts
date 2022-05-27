import { User } from "../entities/User";
import { IDvdRepo, IQuantity } from "../types";

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated: User | IDvdRepo | IQuantity;
      decoded: User;
    }
  }
}
