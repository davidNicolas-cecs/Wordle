"use client";
import React from "react";
import Tile from "./Tile";
import { guessType } from "@/app/(wordle)/page";

interface BoardProps {
  guesses: guessType[][];
  guess: string[];
  currentTry: number;
}

function Board({ guesses, guess, currentTry }: BoardProps) {
  return (
    <div className="flex flex-col gap-2">
      {guesses.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-2">
          {Array.from({ length: 5 }, (_, colIndex) => {
            if (rowIndex === currentTry) {
              const letter = guess[colIndex] || "";
              return <Tile key={colIndex} letter={letter} status="" />;
            } else {
              const tile = row[colIndex];
              return (
                <Tile
                  key={colIndex}
                  letter={tile.letter}
                  status={tile.status}
                />
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
