import { User } from "@/types";
import apiClient from ".";
import { log } from "console";

export const userClient = {
  createUser: async (user: User) => {
    try {
      const res = await apiClient.post("/api/user/createUser", user);
      console.log("User created:", res.data);
      return res.data;
    } catch (err) {
      console.error("Error creating user:", err);
      throw err;
    }
  },
  loginUser: async (user: User) => {
    try {
      const res = await apiClient.post("/api/user/loginUser", user);
      console.log("User logged in:", res.data);
      return res.data;
    } catch (err) {
      console.error("Error logging in user:", err);
      throw err;
    }
  },

  getUserHistory: async (userId: string) => {
    try {
      console.log("Getting user history for userId:", userId);
      const res = await apiClient.get(`/api/history/getUserHistory/${userId}`);
      console.log("User history retrieved:", res.data);
      return res.data;
    } catch (err) {
      console.error("Error getting user history:", err);
      throw err;
    }
  },

  addToWinCount: async (userId: string) => {
    try {
      console.log("Incrementing win count for userId:", { userId: userId });
      await apiClient.post("/api/history/incrementGameWon", {
        userId: userId,
      });
    } catch (err) {
      console.error("Error adding to win count:", err);
      throw err;
    }
  },

  addTotalCount: async (userId: string) => {
    try {
      console.log("Incrementing total for userId:", { userId: userId });
      await apiClient.post("/api/history/incrementGameTotal", {
        userId: userId,
      });
    } catch (err) {
      console.error("Error adding to win count:", err);
      throw err;
    }
  },
};
