import { type Request, type Response } from "express";
import { things } from "../data/things.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ things });
};
