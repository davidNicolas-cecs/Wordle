import React from "react";
import { Menu, Settings, BarChart, BadgeHelp } from "lucide-react";

function NavBar() {
  return (
    <section className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 py-3 px-4 h-16 w-full bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <button className="p-1 mr-2">
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      <div className="flex-grow text-center">
        <h1 className="text-3xl font-bold tracking-wide ml-16 text-gray-800 dark:text-gray-200">
          Wordle
        </h1>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-1">
          <BadgeHelp className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-1">
          <BarChart className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        <button className="p-1">
          <Settings className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </section>
  );
}

export default NavBar;
