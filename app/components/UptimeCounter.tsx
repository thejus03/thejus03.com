"use client";
import { useState, useEffect } from "react";

export default function UptimeCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");

  return (
    <span className="flex items-center gap-1.5">
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
      <span className="text-zinc-600">uptime: {h}:{m}:{s}</span>
    </span>
  );
}
