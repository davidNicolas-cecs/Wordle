"use client";
import Board from "@/components/Game/Board";
import Keyboard from "@/components/Game/Keyboard";
import GameWon from "@/components/Popups/GameWon";
import React, { useState } from "react";

function Page() {
  const [guess, setGuess] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array(5).fill(""))
  );
  const [gameWon, setGameWon] = useState(true);
  const [gameLost, setGameLost] = useState(false);
  const isGameOver = gameWon || gameLost;
  const [currentTry, setCurrentTry] = useState(0);
  const [correctWord, setCorrectWord] = useState("APPLE"); // Placeholder for the correct word
  const handleKeyInput = (key: string) => {
    if (key === "BACKSPACE" || key === "DELETE") {
      setGuess((prev) => prev.slice(0, -1));
    } else if (key === "ENTER") {
      if (guess.length === 5) {
        const newGuesses = [...guesses];
        newGuesses[currentTry] = [...guess];
        setGuesses(newGuesses);
        setGuess([]);
        setCurrentTry((prev) => prev + 1);

        // if word is correct
        if (newGuesses[currentTry].join("") === correctWord) {
          alert("You guessed the word!");
          setGameWon(true);
          return;
        }
      }
    } else if (guess.length < 5) {
      setGuess((prev) => [...prev, key]);
    }
  };

  return (
    <main className="flex flex-col mt-4 items-center justify-items-center min-h-screen">
      {isGameOver && gameWon ? <GameWon /> : null}
      <Board guesses={guesses} guess={guess} currentTry={currentTry} />
      <Keyboard onKeyInput={handleKeyInput} />
    </main>
  );
}

export default Page;
