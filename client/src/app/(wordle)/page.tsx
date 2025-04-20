"use client";
import Board from "@/components/Game/Board";
import Keyboard from "@/components/Game/Keyboard";
import GameLost from "@/components/Popups/GameLost";
import GameWon from "@/components/Popups/GameWon";
import React, { useState } from "react";

export interface guessType {
  letter: string;
  status: "correct" | "present" | "absent" | "";
}
function Page() {
  const [currGuess, setCurrGuess] = useState<string[]>([]);
  const [guesses, setGuesses] = useState<guessType[][]>(
    Array.from({ length: 6 }, () =>
      Array.from({ length: 5 }, () => ({ letter: "", status: "" }))
    )
  );
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const isGameOver = gameWon || gameLost;
  const [currentTry, setCurrentTry] = useState(0);
  const [pressedKeys, setPressedKeys] = useState<
    Record<string, "correct" | "present" | "absent">
  >({});
  const [correctWord, setCorrectWord] = useState("APPLE"); // Placeholder for the correct word
  const handleKeyInput = (key: string) => {
    const keyStatusMap: Record<string, "correct" | "present" | "absent"> = {};

    if (key === "BACKSPACE" || key === "DELETE") {
      setCurrGuess((prev) => prev.slice(0, -1));
    } else if (key === "ENTER") {
      if (currGuess.length === 5) {
        // send reqyest to validate word
        const newGuesses = [...guesses];
        for (let i = 0; i < 5; i++) {
          if (currGuess[i] === correctWord[i]) {
            newGuesses[currentTry][i] = {
              letter: currGuess[i],
              status: "correct",
            };
            keyStatusMap[currGuess[i]] = "correct";
          } else if (correctWord.includes(currGuess[i])) {
            newGuesses[currentTry][i] = {
              letter: currGuess[i],
              status: "present",
            };
            keyStatusMap[currGuess[i]] = "present";
          } else {
            newGuesses[currentTry][i] = {
              letter: currGuess[i],
              status: "absent",
            };
            keyStatusMap[currGuess[i]] = "absent";
          }
        }
        setGuesses(newGuesses);
        setPressedKeys((prev) => {
          const updated = { ...prev };
          Object.entries(keyStatusMap).forEach(([key, status]) => {
            const existing = updated[key];
            if (
              existing === "correct" ||
              (existing === "present" && status === "absent")
            ) {
              return;
            }
            updated[key] = status;
          });
          return updated;
        });
        setCurrGuess([]);
        setCurrentTry((prev) => prev + 1);
        // if word is correct
        if (
          newGuesses[currentTry].map((g) => g.letter).join("") === correctWord
        ) {
          console.log("You won!");
          setGameWon(true);
        } else if (currentTry === 5) {
          setGameLost(true);
          return;
        }
      }
    } else if (currGuess.length < 5) {
      setCurrGuess((prev) => [...prev, key]);
    }
  };

  const handleNewGame = () => {
    setCurrGuess([]);
    setGuesses(
      Array.from({ length: 6 }, () =>
        Array.from({ length: 5 }, () => ({ letter: "", status: "" }))
      )
    );
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
      <Board guesses={guesses} guess={currGuess} currentTry={currentTry} />
      <Keyboard onKeyInput={handleKeyInput} pressedKeys={pressedKeys} />
    </main>
  );
}

export default Page;
