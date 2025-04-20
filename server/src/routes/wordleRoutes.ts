import { Router } from "express";

const wordleRoutes = Router();

// Define your routes here
wordleRoutes.get("/", (req, res) => {
  res.send("Wordle API is working!");
});

export default wordleRoutes;
