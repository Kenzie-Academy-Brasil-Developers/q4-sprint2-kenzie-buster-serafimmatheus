import app from "./app";
import { AppDataSource } from "./data-source";
import * as dotenv from "dotenv";

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("Database is Running...");

    const PORT = process.env.PORT ?? 5000;

    app.listen(PORT, () => {
      console.log(`This is App running \nhttp://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
