"use client";
import Board from "@/components/Game/Board";
import Keyboard from "@/components/Game/Keyboard";
import React, { useState } from "react";

function Page() {
  const [guess, setGuess] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array(5).fill(""))
  );
  const [currentTry, setCurrentTry] = useState(0);

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
      }
    } else if (guess.length < 5) {
      setGuess((prev) => [...prev, key]);
    }
  };

  return (
    <main className="flex flex-col mt-4 items-center justify-items-center min-h-screen">
      <Board guesses={guesses} guess={guess} currentTry={currentTry} />
      <Keyboard onKeyInput={handleKeyInput} />
    </main>
  );
}

export default Page;
