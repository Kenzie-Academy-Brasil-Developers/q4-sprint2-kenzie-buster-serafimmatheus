import { User } from "../entities/User";

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated: User;
      decoded: User;
    }
  }
}
