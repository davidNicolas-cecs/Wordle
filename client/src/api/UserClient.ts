import { User } from "@/types";
import apiClient from ".";
import { log } from "console";

export const userClient = {
  createUser: async (user: User) => {
    try {
      console.log("Creating user:", user);
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
      console.log("Logging in user:", user);
      const res = await apiClient.post("/api/user/loginUser", user);
      console.log("User logged in:", res.data);
      return res.data;
    } catch (err) {
      console.error("Error logging in user:", err);
      throw err;
    }
  },
};
