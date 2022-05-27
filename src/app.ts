import "express-async-errors";
import express from "express";
import { initApp } from "./routes/index.routes";

const app = express();

app.use(express.json());

initApp(app);

export default app;
