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
};
