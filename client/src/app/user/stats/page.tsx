"use client";
import React, { useEffect } from "react";

function page() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("You need to be logged in to access this page.");
      window.location.href = "/user/register";
    }
  }, []);
  return (
    <main className="flex flex-col items-center justify-center mt-6 bg-gray-900 text-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-md flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center">Stats</h1>
        <p className="text-center text-gray-400 text-sm">
          Check out your win % and total games played.{" "}
          <a href="#" className="underline text-blue-500">
            Click here to view your favorite words
          </a>{" "}
        </p>
        <div className="flex flex-col justify-between items-center mt-4 gap-3">
          <p className="text-center text-gray-400 text-sm">Wins</p>
          <h3>21</h3>
          <p className="text-center text-gray-400 text-sm">
            Total Games played
          </p>
          <h3>25</h3>
          <p className="text-center text-gray-400 text-sm">Win %</p>
          <h3>84%</h3>
        </div>
      </div>
    </main>
  );
}

export default page;
