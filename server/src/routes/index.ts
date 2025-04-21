import { Router } from "express";
import wordleRoutes from "./wordleRoutes";
import favoriteRoutes from "./favoriteRoutes";
import userRoutes from "./userRoutes";
const router = Router();

//api/wordle
router.use("/wordle", wordleRoutes);

router.use("/favorites", favoriteRoutes);

router.use("/user", userRoutes);

export default router;
