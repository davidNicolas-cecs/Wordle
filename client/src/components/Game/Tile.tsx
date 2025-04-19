import React from "react";

interface TileProps {
  letter?: string;
  isCorrect?: boolean;
  isPresent?: boolean;
  isEmpty?: boolean;
}
function Tile({ letter }: TileProps) {
  return (
    <div className="border-zinc-500 w-[60px] h-[60px] border-2 mt-2 flex items-center justify-center">
      <p className="font-medium text-2xl">{letter}</p>
    </div>
  );
}

export default Tile;
