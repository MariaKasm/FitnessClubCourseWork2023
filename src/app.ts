/** @format */

import express from "express";
import dotenv from "dotenv";
import DataBase from "./db/database";
import routes from "./routes/routers";

dotenv.config();

const app = express();

const PORT: number = +process.env.PORT;

app.use(express.json());

app.use("/api", routes);

const start = async () => {
  try {
    await DataBase.sync();
    await DataBase.authenticate();
    app.listen(PORT, () => console.log("Server work " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
