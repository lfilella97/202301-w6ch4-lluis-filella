import "./loadEnvoirements.js";
import express from "express";
import inquirer from "inquirer";
import { type InquirerResponseStructure } from "./types.js";
import question from "./question.js";
import { router } from "./router/router.js";
import debug from "debug";

export const createDebug = debug("/things");

const app = express();

app.use(express.json());

app.use("/things", router);

const { port: imputPort } = await inquirer.prompt<InquirerResponseStructure>(
  question
);

app.listen(imputPort, () => {
  createDebug("hola");
});
