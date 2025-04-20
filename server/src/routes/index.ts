import { Router } from "express";
import wordleRoutes from "./wordleRoutes";
import favoriteRoutes from "./favoriteRoutes";

const router = Router();

//api/wordle
router.use("/wordle", wordleRoutes);

router.use("/favorites", favoriteRoutes);

export default router;
