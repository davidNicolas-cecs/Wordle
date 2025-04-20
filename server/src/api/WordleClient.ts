import apiClient from ".";
import { checkIfValidWord } from "../controller/wordleController";
import { WordResponse } from "../types";

export const wordleClient = {
  getRandomWord: async (): Promise<string> => {
    try {
      const res = await apiClient.get<WordResponse>(
        "?random=true&limit=1&letters=5"
      );
      return res.data.word;
    } catch (err) {
      console.error("Error fetching random word:", err);
      throw err;
    }
  },

  checkIfValidWord: async (word: string): Promise<boolean> => {
    try {
      const res = await apiClient.get<WordResponse>(`/${word}`);
      return res.data.word === word;
    } catch (err) {
      console.error("Error checking if valid word:", err);
      throw err;
    }
  },
};
