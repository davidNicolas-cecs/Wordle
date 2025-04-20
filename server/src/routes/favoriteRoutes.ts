import { Router } from "express";
import * as UserController from "../controller/userController";

const favoriteRoutes = Router();
favoriteRoutes.get("/getUserFavorites", UserController.getUserFavorites);

export default favoriteRoutes;
