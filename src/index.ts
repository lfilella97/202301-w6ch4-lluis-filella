import "./loadEnvoirements.js";
import express from "express";
import inquirer, { type PromptModule } from "inquirer";
import { type InquirerResponseStructure } from "./types.js";

const app = express();

const question = [
  {
    name: "port",
    type: "input",
    message: "Introduce a number to open the port",
    validate(answer: number) {
      if (Number.isNaN(answer) || Number.isInteger(answer) || answer >= 0) {
        return true;
      }

      return "not a valid value";
    },
  },
];

const { imputPort } = await inquirer.prompt<InquirerResponseStructure>(
  question
);

app.listen(imputPort);
