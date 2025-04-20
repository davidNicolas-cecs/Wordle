import { Router } from "express";
import wordleRoutes from "./wordleRoutes";

const router = Router();

//api/wordle
router.use("/wordle", wordleRoutes);

export default router;
