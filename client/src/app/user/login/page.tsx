"use client";
import React, { useEffect } from "react";
import { z } from "zod";
import { userClient } from "@/api/UserClient";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email"),
});

function Page() {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      alert("You're already logged in.");
      window.location.href = "/user/stats";
    }
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = {
      username: formData.get("username")?.toString() || "",
      email: formData.get("email")?.toString() || "",
    };

    const result = loginSchema.safeParse(values);

    if (!result.success) {
      console.error("Validation errors:", result.error.flatten().fieldErrors);
      return;
    }

    console.log("Validated login data:", result.data);
    try {
      const user = await userClient.loginUser(result.data);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login successful!");
        window.location.href = "/user/stats";
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your info.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center mt-6 bg-gray-900 text-gray-100 px-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-xl shadow-md flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <p className="text-center text-gray-400 text-sm">
          New here?{" "}
          <a href="/user/register" className="underline text-blue-500">
            Register
          </a>{" "}
          instead
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="mt-4 bg-gray-600 hover:bg-gray-700 transition-colors p-2 rounded-md font-semibold cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Page;
