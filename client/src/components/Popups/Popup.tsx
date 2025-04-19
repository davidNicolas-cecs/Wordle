import { ReactNode } from "react";

export function Popup({ children }: { children: ReactNode }) {
  return (
    <div className="fixed top-1/4  w-[300px] h-[300px] flex items-center justify-center bg-gray-100 dark:bg-gray-900 border-2 z-50">
      <div className="popup-box">{children}</div>
    </div>
  );
}
