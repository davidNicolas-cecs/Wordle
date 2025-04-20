import { on } from "events";
import React, { JSX } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className=" border p-2 bg-green-900 cursor-pointer"
    >
      {children}
    </button>
  );
}

export default Button;
