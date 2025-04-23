import React from "react";
import { Popup } from "./Popup";
import Button from "../Common/Button";
import { HeartPlus } from "lucide-react";

interface GameWonProps {
  handleClick: () => void;
}
function GameWon({ handleClick }: GameWonProps) {
  return (
    <Popup>
      <div className="flex flex-col items-center justify-center h-full w-full gap-4">
        <h1 className="font-bold text-2xl text-white">Ready to Play? </h1>

        <Button onClick={handleClick}> Start New Game </Button>
      </div>
    </Popup>
  );
}

export default GameWon;
