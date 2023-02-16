import "./loadEnvoirements.js";
import express from "express";
import inquirer from "inquirer";
import { type InquirerResponseStructure } from "./types.js";
import question from "./question.js";

const app = express();

app.use(express.json());

app.use("/things");

const { imputPort } = await inquirer.prompt<InquirerResponseStructure>(
  question
);

app.listen(imputPort);
