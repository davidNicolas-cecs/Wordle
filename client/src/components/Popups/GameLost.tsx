import React from "react";
import { Popup } from "./Popup";
import Button from "../Common/Button";
import { HeartPlus } from "lucide-react";

interface GameWonProps {
  handleClick: () => void;
  word: string;
}
function GameLost({ handleClick, word }: GameWonProps) {
  return (
    <Popup>
      <div className="flex flex-col items-center justify-center h-full w-full gap-4 text-white">
        <h1 className="font-bold text-2xl">Nice Try!</h1>
        <p>The word was: {word}</p>

        <Button onClick={handleClick}> Start New Game </Button>
        <button className="flex flex-row gap-2 cursor-pointer">
          Save
          <HeartPlus />
        </button>
      </div>
    </Popup>
  );
}

export default GameLost;
