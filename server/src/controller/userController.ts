import { Request, Response } from "express";
import { User } from "../model/User";

export const addUser = async (req: Request, res: Response) => {
  try {
    const { username, email } = req.body;
    const userId = await User.addUser({ username, email });
    res.status(201).json({
      message: "User added successfully",
      user: {
        name,
        email,
        id: userId,
      },
    });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({
      message: "Failed to add user",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
