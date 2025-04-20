import { Router } from "express";
import * as userController from "../controller/userController";

const favoriteRoutes = Router();

//favoriteRoutes.post("/getAllFavorites", userController.get);
export default favoriteRoutes;
