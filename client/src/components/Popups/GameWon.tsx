import React from "react";
import { Popup } from "./Popup";

function GameWon() {
  return (
    <Popup>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1>You Won</h1>
        <button>Start New Game</button>
      </div>
    </Popup>
  );
}

export default GameWon;
