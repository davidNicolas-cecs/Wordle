"use client";
import { userClient } from "@/api/UserClient";
import { wordleClient } from "@/api/WordleClient";
import Board from "@/components/Game/Board";
import Keyboard from "@/components/Game/Keyboard";
import GameLost from "@/components/Popups/GameLost";
import GameStart from "@/components/Popups/GameStart";
import GameWon from "@/components/Popups/GameWon";
import LoadingState from "@/components/Popups/LoadingState";
import React, { useEffect, useState } from "react";
import { set } from "zod";

export interface guessType {
  letter: string;
  status: "correct" | "present" | "absent" | "";
}
function Page() {
  const [user, setUser] = useState<any>(null);
  // To update User state for history
  const checkStorage = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setUser(null);
      return;
    }

    const userId = JSON.parse(user)?.id;
    setUser(userId);
  };
  useEffect(() => {
    checkStorage();
  }, []);
  const [loading, setLoading] = useState(false);
  const [showStartPopup, setShowStartPopup] = useState(true);
  const [correctWord, setCorrectWord] = useState("");
  const startGame = async () => {
    setLoading(true);
    setShowStartPopup(false);
    const response = await wordleClient.getWordle();
    if (response) {
      setCorrectWord(response.toUpperCase());
      console.log("Game started with:", response);

      setLoading(false);
    }
  };
  // Validate word api call
  const validateWord = async (word: string) => {
    try {
      const response = await wordleClient.validateWord(word);
      return response;
    } catch (error) {
      console.error("Error validating word:", error);
      return false;
    }
  };
  // Initialize game state var
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

  // Handles key press events
  const handleKeyInput = async (key: string) => {
    const keyStatusMap: Record<string, "correct" | "present" | "absent"> = {};

    if (key === "BACKSPACE" || key === "DELETE") {
      setCurrGuess((prev) => prev.slice(0, -1));
    } else if (key === "ENTER") {
      if (currGuess.length === 5) {
        // send reqyest to validate word
        const isValid = await validateWord(currGuess.join("").toLowerCase());
        if (isValid == false) {
          alert("Invalid word!");
          return;
        }
        const newGuesses = [...guesses];
        // Goes through the guess and sets the corresponding status - correct, present, absent
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
        // Updates the keys with the same status
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
        // Game logic if the word is correct or if the game is lost
        if (
          newGuesses[currentTry].map((g) => g.letter).join("") === correctWord
        ) {
          setGameWon(true);
          checkStorage();
          // call to increment users history total wins
          if (user) {
            await userClient.addToWinCount(user);
          }
        } else if (currentTry === 5) {
          setGameLost(true);
          checkStorage();
          if (user) {
            await userClient.addTotalCount(user);
          }
          return;
        }
      }
      // keeps track of current key press
    } else if (currGuess.length < 5) {
      setCurrGuess((prev) => [...prev, key]);
    }
  };
  // Handles new Game logic on click
  const handleNewGame = () => {
    startGame();
    setCurrGuess([]);
    setGuesses(
      Array.from({ length: 6 }, () =>
        Array.from({ length: 5 }, () => ({ letter: "", status: "" }))
      )
    );
    setPressedKeys({});

    setGameWon(false);
    setGameLost(false);
    setCurrentTry(0);
    checkStorage();
  };
  //for first game popup
  const handleStartNewGame = () => {
    startGame();
  };
  // Components -> board displays, keyboard handles key presses and dispplays, POPUPS for game ending logic and Loading state for api requests pending
  return (
    <main className="flex flex-col mt-4 items-center justify-items-center min-h-screen">
      {loading && <LoadingState />}
      {showStartPopup && <GameStart handleClick={handleStartNewGame} />}
      {gameWon && <GameWon handleClick={handleNewGame} stats={currentTry} />}
      {gameLost && <GameLost handleClick={handleNewGame} word={correctWord} />}
      <Board guesses={guesses} guess={currGuess} currentTry={currentTry} />
      <Keyboard onKeyInput={handleKeyInput} pressedKeys={pressedKeys} />
    </main>
  );
}

export default Page;
