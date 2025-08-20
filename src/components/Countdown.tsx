"use client"
import { useEffect, useState } from "react";
export default function Countdown({ seconds = 60 }: { seconds?: number }){
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const secondsLeft = timeLeft % 60;

  return (
    <div className="flex items-end justify-center gap-6 mt-6">
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold text-gray-600">{String(days).padStart(2, "0")}</span>
        <span className="text-xs font-semibold text-gray-500 mt-2 tracking-widest">JOURS</span>
      </div>
      <span className="text-4xl font-bold text-shadow-gray-700 mb-2">:</span>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold text-gray-600">{String(hours).padStart(2, "0")}</span>
        <span className="text-xs font-semibold text-gray-500 mt-2 tracking-widest">HEURES</span>
      </div>
      <span className="text-4xl font-bold text-shadow-gray-700 mb-2">:</span>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold text-gray-600">{String(minutes).padStart(2, "0")}</span>
        <span className="text-xs font-semibold text-gray-500 mt-2 tracking-widest">MINUTES</span>
      </div>
      <span className="text-4xl font-bold text-shadow-gray-700 mb-2">:</span>
      <div className="flex flex-col items-center">
        <span className="text-5xl font-bold text-gray-600">{String(secondsLeft).padStart(2, "0")}</span>
        <span className="text-xs font-semibold text-gray-500 mt-2 tracking-widest">SECONDES</span>
      </div>
    </div>
  );
}



