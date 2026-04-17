"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});

  // Set your launch date here
  const targetDate = new Date("2026-06-01T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-4">
      <h2 className="tracking-widest text-gray-300 mb-4 text-2xl md:text-4xl text-center">
          mrmeesaankidstv
        </h2>
      
      {/* Logo / Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
        🚀 Coming Soon
      </h1>

      <p className="text-gray-300 text-center max-w-md mb-8">
        We're working hard to launch something amazing. Stay tuned!
      </p>

      {/* Countdown */}
      <div className="grid grid-cols-4 gap-4 mb-10 text-center">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="bg-white/10 backdrop-blur-md px-4 py-6 rounded-xl shadow-lg"
          >
            <p className="text-2xl md:text-3xl font-semibold">
              {timeLeft[unit] || "0"}
            </p>
            <p className="text-xs uppercase text-gray-400">{unit}</p>
          </div>
        ))}
      </div>

      {/* Email Subscribe */}
      <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
        >
          Notify Me
        </button>
      </form>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-10 text-center">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
}