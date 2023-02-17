import { Router } from "express";
import { getThings } from "../controllers/thingsControllers.js";

export const router = Router();

router.get("/", getThings);
router.get("/thing/:id");
