import { Router } from "express";
import * as wordleController from "../controller/wordleController";

const wordleRoutes = Router();

wordleRoutes.get("/getRandomWord", wordleController.getRandomWord);
wordleRoutes.get("/checkIfValidWord/:word", wordleController.checkIfValidWord);

export default wordleRoutes;
