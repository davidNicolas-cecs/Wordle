"use client";
import React from "react";
import Tile from "./Tile";

interface BoardProps {
  guesses: string[][];
  guess: string[];
  currentTry: number;
}

function Board({ guesses, guess, currentTry }: BoardProps) {
  return (
    <div className="flex flex-col gap-2">
      {guesses.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-2">
          {Array.from({ length: 5 }, (_, colIndex) => {
            const letter =
              rowIndex === currentTry
                ? guess[colIndex] || ""
                : row[colIndex] || "";
            return <Tile key={colIndex} letter={letter} />;
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
