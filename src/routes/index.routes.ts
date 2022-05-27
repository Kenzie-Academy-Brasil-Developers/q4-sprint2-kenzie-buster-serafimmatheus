import "express-async-errors";
import { Express } from "express";
import { router as userRouter } from "./user.router";
import { router as dvdRouter } from "./dvd.router";
import { router as cartRouter } from "./cart.router";
import { errors } from "./error.router";

const initApp = (app: Express): void => {
  app.use("/api", userRouter);
  app.use("/api", dvdRouter);
  app.use("/api", cartRouter);
  app.use(errors);
};

export { initApp };
