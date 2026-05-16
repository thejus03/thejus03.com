"use client";
import { useState, useEffect } from "react";

interface BatteryManager extends EventTarget {
  level: number;
  charging: boolean;
}

interface NavigatorWithBattery extends Navigator {
  getBattery(): Promise<BatteryManager>;
}

export default function UptimeCounter() {
  const [seconds, setSeconds] = useState(0);
  const [battery, setBattery] = useState<{ level: number; charging: boolean } | null>(null);
  const [online, setOnline] = useState(() => typeof window !== "undefined" ? navigator.onLine : true);
  const [cores] = useState<number | null>(() => typeof window !== "undefined" ? navigator.hardwareConcurrency ?? null : null);
  const [resolution] = useState<string | null>(() => typeof window !== "undefined" ? `${screen.width}x${screen.height}` : null);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);

    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if ("getBattery" in navigator) {
      (navigator as NavigatorWithBattery).getBattery().then((bat: BatteryManager) => {
        setBattery({ level: bat.level, charging: bat.charging });
        const update = () => setBattery({ level: bat.level, charging: bat.charging });
        bat.addEventListener("levelchange", update);
        bat.addEventListener("chargingchange", update);
      });
    }

    return () => {
      clearInterval(interval);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="space-y-0.5 text-zinc-600 text-right">
      <div className="flex items-center justify-end gap-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600" />
        <span>uptime: {h}:{m}:{s}</span>
      </div>
      {battery && (
        <div>bat: {Math.round(battery.level * 100)}%{battery.charging && <span className="text-green-600"> (charging)</span>}</div>
      )}
      {cores && <div>cpu: {cores} cores</div>}
      {resolution && <div>res: {resolution}</div>}
      <div>net: <span className={online ? "text-green-600" : "text-rose-500"}>{online ? "online" : "offline"}</span></div>
    </div>
  );
}
