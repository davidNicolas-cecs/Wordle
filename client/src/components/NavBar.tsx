"use client";
import React, { useEffect, useState } from "react";
import { Menu, User, BarChart, BadgeHelp, LogOut } from "lucide-react";
import { set } from "zod";

function NavBar() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user ? JSON.parse(user) : null);
  }, []);
  return (
    <section className="flex justify-between items-center border-b  border-gray-700 py-3 px-4 h-16 w-full bg-gray-800">
      <div className="flex items-center">
        <button className="p-1 mr-2">
          <Menu className="w-6 h-6  text-gray-300" />
        </button>
      </div>

      <div className="flex-grow text-center">
        <h1 className="text-3xl font-bold tracking-wide ml-16  text-gray-200">
          <a href="/">Wordle</a>
        </h1>
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-1">
          <BadgeHelp className="w-6 h-6 text-gray-300" />
        </button>
        <a className="p-1" href="/user/stats">
          <BarChart className="w-6 h-6 text-gray-300" />
        </a>
        <a className="p-1" href="/user/register">
          <User className="w-6 h-6 text-gray-300" />
        </a>
        {user && (
          <button
            className="p-1 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("user");
              setUser(null);
            }}
          >
            <LogOut className="w-6 h-6 text-gray-300" />
          </button>
        )}
      </div>
    </section>
  );
}

export default NavBar;
