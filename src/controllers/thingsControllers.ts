import debug from "debug";
import { type Request, type Response } from "express";
import { things } from "../data/things.js";
import { createDebug } from "../index.js";

export const getThings = (req: Request, res: Response) => {
  createDebug("Response things Send");
  res.status(200).json({ things });
};
