import { WordleResponse } from "@/types";
import apiClient from ".";

export const wordleClient = {
  getWordle: async (): Promise<string> => {
    try {
      const res = await apiClient.get<{ word: string }>(
        `/api/wordle/getRandomWord`
      );
      console.log("Random word fetched:", res.data.word);
      return res.data.word;
    } catch (err) {
      console.error("Error fetching random word:", err);
      throw err;
    }
  },

  validateWord: async (word: string): Promise<boolean> => {
    try {
      const res = await apiClient.get<{ isWord: boolean }>(
        `/api/wordle/checkIfValidWord/${word}`
      );
      console.log("Word validation response:", res.data.isWord);
      return res.data.isWord;
    } catch (err) {
      console.error("Error validating word:", err);
      throw err;
    }
  },
};
