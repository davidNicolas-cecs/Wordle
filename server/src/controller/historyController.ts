import { Request, Response } from "express";
import { History } from "../model/History";

export const getUserHistiory = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    const userHistory = await History.getUserHistory(userId);
    res.status(200).json({
      userHistory: userHistory,
    });
  } catch (error) {
    console.error("Error retrieving user history:", error);
    res.status(500).json({
      message: "Failed to retrieve user history",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

//increments games won + games total
export const incrementGameWon = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    await History.incrementGameWon(userId);
    res.status(200).json({
      message: "Game won count incremented successfully",
    });
  } catch (error) {}
};
// increments only games total
export const incrementGameTotal = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;
    await History.incrementTotalGames(userId);
    res.status(200).json({
      message: "Game Total count incremented successfully",
    });
  } catch (error) {}
};
