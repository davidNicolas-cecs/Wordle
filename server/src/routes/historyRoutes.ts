import { Router } from "express";
import * as historyController from "../controller/historyController";

const historyRoutes = Router();

historyRoutes.get("/getUserHistory/:userId", historyController.getUserHistiory);

historyRoutes.post("/incrementGameWon", historyController.incrementGameWon);

historyRoutes.post("/incrementGameTotal", historyController.incrementGameTotal);

export default historyRoutes;
