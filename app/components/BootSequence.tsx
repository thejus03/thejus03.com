"use client";
import { useState, useEffect } from "react";

const LINES = [
  { text: "initializing profile...", delay: 300 },
  { text: "loading experience data... ", suffix: "OK", delay: 1000 },
  { text: "loading projects... ", suffix: "OK", delay: 1700 },
];

export default function BootSequence() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(() => typeof window !== "undefined" && !!sessionStorage.getItem("booted"));

  useEffect(() => {
    if (done) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), line.delay));
    });

    timers.push(setTimeout(() => setFading(true), 2500));
    timers.push(setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("booted", "1");
    }, 3000));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-stone-900 flex flex-col justify-center transition-opacity duration-500 ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="max-w-3xl mx-auto w-full px-5 space-y-1 text-sm">
        {LINES.map((line, i) => (
          <p
            key={i}
            className={`text-zinc-400 transition-opacity duration-150 ${visibleCount > i ? "opacity-100" : "opacity-0"}`}
          >
            {line.text}
            {line.suffix && <span className="text-green-400">{line.suffix}</span>}
          </p>
        ))}
      </div>
    </div>
  );
}
