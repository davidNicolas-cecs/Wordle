import React, { useState } from "react";
import { Popup } from "./Popup";
import Button from "../Common/Button";
import { HeartPlus } from "lucide-react";

interface GameWonProps {
  handleClick: () => void;
  stats: number;
}
function GameWon({ handleClick, stats }: GameWonProps) {
  const [saved, setSaved] = useState(false);
  return (
    <Popup>
      <div className="flex flex-col items-center justify-center h-full w-full gap-4 cursor-pointer text-white">
        <h1 className="font-bold text-2xl">You Won</h1>
        <p>Guessed in : {stats} / 6</p>
        <p>Accuracy: {((1 - (stats - 1) / 6) * 100).toFixed(2)}%</p>
        <Button onClick={handleClick}> Start New Game </Button>
        <span className="flex flex-row gap-2 ">
          <button className="cursor-pointer" onClick={() => setSaved(!saved)}>
            {saved ? <HeartPlus color="#ff0a0a" /> : <HeartPlus />}
          </button>
        </span>
      </div>
    </Popup>
  );
}

export default GameWon;
