import "./loadEnvoirements.js";
import express from "express";
import { router } from "./router/router.js";
import debug from "debug";

export const createDebug = debug("/things");

const app = express();

app.use(express.json());

app.use("/things", router);

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  createDebug("hola");
});
