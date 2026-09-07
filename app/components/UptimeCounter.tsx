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
  const [online, setOnline] = useState(true);
  const [cores, setCores] = useState<number | null>(null);
  const [resolution, setResolution] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    let removeBatteryListeners: (() => void) | undefined;
    let cancelled = false;

    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);
    const initialRead = requestAnimationFrame(() => {
      setOnline(navigator.onLine);
      setCores(navigator.hardwareConcurrency ?? null);
      setResolution(`${screen.width}x${screen.height}`);
    });
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if ("getBattery" in navigator) {
      (navigator as NavigatorWithBattery).getBattery().then((bat: BatteryManager) => {
        if (cancelled) return;
        setBattery({ level: bat.level, charging: bat.charging });
        const update = () => setBattery({ level: bat.level, charging: bat.charging });
        bat.addEventListener("levelchange", update);
        bat.addEventListener("chargingchange", update);
        removeBatteryListeners = () => {
          bat.removeEventListener("levelchange", update);
          bat.removeEventListener("chargingchange", update);
        };
      });
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(initialRead);
      clearInterval(interval);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      removeBatteryListeners?.();
    };
  }, []);

  const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="text-right text-zinc-600">
      <div className="flex items-center justify-end gap-1.5">
        <span className="inline-block h-1 w-1 rounded-full bg-green-600" />
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
