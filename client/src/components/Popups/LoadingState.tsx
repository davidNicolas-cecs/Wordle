import React from "react";
import { Popup } from "./Popup";

function LoadingState() {
  return (
    <Popup>
      <div className="flex items-center justify-center p-8 z-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </Popup>
  );
}
export default LoadingState;
