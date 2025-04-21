import React from "react";
import { Delete } from "lucide-react";

interface KeyTileProps {
  char: string;
  handleKeyPress: (char: string) => void;
  status?: "correct" | "present" | "absent" | "";
}
function KeyTile({ char, handleKeyPress, status }: KeyTileProps) {
  const bgColor =
    status === "correct"
      ? "bg-green-500"
      : status === "present"
      ? "bg-yellow-500"
      : status === "absent"
      ? "bg-gray-800"
      : "bg-gray-700";
  return (
    <button
      className={`bg-gray-400  w-[40px] h-[60px] min-w-fit rounded-xs mt-2 p-2 ${bgColor} cursor-pointer `}
      onClick={() => handleKeyPress(char)}
    >
      <p className="text-white font-black">
        {char === "Backspace" ? <Delete size={30} /> : char}
      </p>
    </button>
  );
}

export default KeyTile;
