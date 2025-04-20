import { Request, Response } from "express";
import { wordleClient } from "../api/WordleClient";
import { Wordle } from "../model/Wordle";
export const getRandomWord = async (req: Request, res: Response) => {
  try {
    const word = await wordleClient.getRandomWord();
    console.log("Random word fetched:", word);
    // call to model to add to db
    await Wordle.addWord(word);
    res.status(200).json({
      word: word,
    });
  } catch (error) {
    console.error("Error fetching word:", error);
    res.status(500).json({
      message: "Failed to fetch random word",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const checkIfValidWord = async (req: Request, res: Response) => {
  try {
    console.log("Checking word:", req.params.word);
    const word = req.params.word.toLowerCase();
    const isWord = await wordleClient.checkIfValidWord(word);
    res.status(200).json({
      isWord: isWord,
    });
  } catch (error) {
    console.error("Error checking word:", error);
    res.status(500).json({
      message: "Failed to check word",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
