import { Router } from "express";
import wordleRoutes from "./wordleRoutes";
import favoriteRoutes from "./favoriteRoutes";
import userRoutes from "./userRoutes";
import historyRoutes from "./historyRoutes";
const router = Router();

//api/wordle
router.use("/wordle", wordleRoutes);

router.use("/favorites", favoriteRoutes);

router.use("/user", userRoutes);

router.use("/history", historyRoutes);

export default router;
