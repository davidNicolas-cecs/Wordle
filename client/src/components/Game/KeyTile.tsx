import React from "react";
import { Delete } from "lucide-react";

interface KeyTileProps {
  char: string;
  handleKeyPress: (char: string) => void;
  isPressed?: boolean;
}
function KeyTile({ char, handleKeyPress, isPressed }: KeyTileProps) {
  return isPressed ? (
    <button
      disabled
      className="bg-gray-700 w-[40px] h-[60px] rounded-xs mt-2 p-2"
      onClick={() => handleKeyPress(char)}
    >
      <p className="font-black">
        {char === "Backspace" ? <Delete size={30} /> : char}
      </p>
    </button>
  ) : (
    <button
      className="bg-gray-600 min-w-[40px] h-[60px] rounded-xs mt-2 w-fit p-2"
      onClick={() => handleKeyPress(char)}
    >
      <p className="font-black">
        {char === "Backspace" ? <Delete size={40} /> : char}
      </p>
    </button>
  );
}

export default KeyTile;
