import { Request, Response } from "express";
import { User } from "../model/User";

export const addUser = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    console.log(req.body);
    const userId = await User.addUser({ username, email });
    console.log("User added with ID:", userId);
    res.status(201).json({
      id: userId,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({
      message: "Failed to add user",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    console.log(req.body);
    const userId = await User.loginUser({ username, email });
    console.log("User logged in with ID:", userId);
    res.status(200).json({
      id: userId,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      message: "Failed to login user",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
