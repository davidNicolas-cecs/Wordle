import { Router } from "express";
import * as userController from "../controller/userController";
const userRoutes = Router();

userRoutes.post("/createUser", userController.addUser);
userRoutes.post("/loginUser", userController.loginUser);
export default userRoutes;
