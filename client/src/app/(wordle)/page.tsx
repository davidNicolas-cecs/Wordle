"use client";
import Board from "@/components/Game/Board";
import Keyboard from "@/components/Game/Keyboard";
import GameLost from "@/components/Popups/GameLost";
import GameWon from "@/components/Popups/GameWon";
import React, { useState } from "react";

function Page() {
  const [guess, setGuess] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array(5).fill(""))
  );
  const [gameWon, setGameWon] = useState(false);
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
          setGameWon(true);
          return;
        } else if (currentTry === 5) {
          setGameLost(true);
          return;
        }
      }
    } else if (guess.length < 5) {
      setGuess((prev) => [...prev, key]);
    }
  };

  const handleNewGame = () => {
    setGuess([]);
    setGuesses(Array.from({ length: 6 }, () => Array(5).fill("")));
    setGameWon(false);
    setGameLost(false);
    setCurrentTry(0);
    setCorrectWord("APPLE"); // Reset to a new word
    console.log("New game started!from page.tsx");
  };

  return (
    <main className="flex flex-col mt-4 items-center justify-items-center min-h-screen">
      {gameWon && <GameWon handleClick={handleNewGame} stats={currentTry} />}
      {gameLost && <GameLost handleClick={handleNewGame} stats={currentTry} />}
      <Board guesses={guesses} guess={guess} currentTry={currentTry} />
      <Keyboard onKeyInput={handleKeyInput} />
    </main>
  );
}

export default Page;
