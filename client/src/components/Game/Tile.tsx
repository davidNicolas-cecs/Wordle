import React from "react";

interface TileProps {
  letter?: string;
  status?: "correct" | "present" | "absent" | "";
}
function Tile({ letter, status }: TileProps) {
  const bgColor =
    status === "correct"
      ? "bg-green-500"
      : status === "present"
      ? "bg-yellow-500"
      : status === "absent"
      ? "bg-gray-700"
      : "";

  return (
    <div
      className={`border-zinc-500 w-[60px] h-[60px] border-2 mt-2 flex items-center justify-center ${bgColor}`}
    >
      <p className="font-medium text-2xl">{letter}</p>
    </div>
  );
}

export default Tile;
