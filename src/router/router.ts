import { Router } from "express";
import { getThings } from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
export const router = Router();

router.get("/", getThings);
router.get("/thing/:id");
