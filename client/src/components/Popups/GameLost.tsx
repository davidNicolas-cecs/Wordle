import React from "react";
import { Popup } from "./Popup";
import Button from "../Common/Button";
import { HeartPlus } from "lucide-react";

interface GameWonProps {
  handleClick: () => void;
  stats: number;
}
function GameWon({ handleClick, stats }: GameWonProps) {
  return (
    <Popup>
      <div className="flex flex-col items-center justify-center h-full w-full gap-4">
        <h1 className="font-bold text-2xl">Nice Try!</h1>

        <Button onClick={handleClick}> Start New Game </Button>
        <span className="flex flex-row gap-2">
          Save
          <HeartPlus />
        </span>
      </div>
    </Popup>
  );
}

export default GameWon;
