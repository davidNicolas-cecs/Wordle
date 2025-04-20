import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": process.env.X_RAPIDAPI_HOST,
    "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
  },
});

export default apiClient;
