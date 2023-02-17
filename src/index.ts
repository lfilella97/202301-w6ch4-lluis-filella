import "./loadEnvoirements.js";
import express from "express";
import { router } from "./router/router.js";
import debug from "debug";
import liftServer from "./server/liftServer.js";

export const createDebug = debug("/things");

export const app = express();

app.use(express.json());

app.use("/things", router);

export const port = +(process.env.PORT ?? 4000);

liftServer();
