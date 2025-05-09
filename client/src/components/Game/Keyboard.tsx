"use client";
import React, { useEffect, useState } from "react";
import KeyTile from "./KeyTile";

interface KeyboardProps {
  onKeyInput: (key: string) => void;
  pressedKeys?: Record<string, string>;
}
function Keyboard({ onKeyInput, pressedKeys }: KeyboardProps) {
  const keyrow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyrow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyrow3 = ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"];
  const allKeys = [...keyrow1, ...keyrow2, ...keyrow3].map((k) =>
    k.toLowerCase()
  );
  const handleKeyPress = (key: string) => {
    onKeyInput(key);
  };

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "r") {
        event.preventDefault();
        window.location.reload();
        return;
      }
      if (allKeys.includes(event.key.toLowerCase())) {
        onKeyInput(event.key.toUpperCase());
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, [onKeyInput]);

  return (
    <div className="flex flex-row mt-2">
      <section className="flex flex-col gap-2 items-center justify-center">
        <section className="flex flex-col gap-2 items-center justify-center">
          {[keyrow1, keyrow2, keyrow3].map((row, i) => (
            <div key={i} className="flex flex-row gap-2">
              {row.map((key) => (
                <KeyTile
                  key={key}
                  char={key}
                  handleKeyPress={handleKeyPress}
                  status={
                    pressedKeys?.[key] as "correct" | "present" | "absent" | ""
                  }
                />
              ))}
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Keyboard;
