import apiClient from ".";
import { checkIfValidWord } from "../controller/wordleController";
import { WordResponse } from "../types";

export const wordleClient = {
  getRandomWord: async (): Promise<string> => {
    try {
      const letterPattern = /^[a-z]{5}$/;
      while (true) {
        const res = await apiClient.get<WordResponse>(
          "?random=true&limit=1&letters=5"
        );
        const word = res.data.word;
        console.log(word);
        if (letterPattern.test(word)) {
          return word;
        }
      }
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
      if (
        err instanceof Error &&
        (err as any).response &&
        (err as any).response.status === 404
      ) {
        // If 404, return false
        return false;
      }
      console.error("Error checking if valid word:", err);
      throw err;
    }
  },
};
