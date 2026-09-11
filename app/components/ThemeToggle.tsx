"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

    function syncTheme() {
      let theme = "dark";
      if (mobile.matches) {
        theme = systemTheme.matches ? "dark" : "light";
      } else {
        try {
          theme = localStorage.getItem("theme") === "light" ? "light" : "dark";
        } catch {
          // Keep the desktop default when browser storage is unavailable.
        }
      }
      document.documentElement.dataset.theme = theme;
    }

    syncTheme();
    mobile.addEventListener("change", syncTheme);
    systemTheme.addEventListener("change", syncTheme);
    return () => {
      mobile.removeEventListener("change", syncTheme);
      systemTheme.removeEventListener("change", syncTheme);
    };
  }, []);

  function toggleTheme() {
    const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <Sun className="theme-icon-sun" size={18} strokeWidth={1.5} aria-hidden="true" />
      <Moon className="theme-icon-moon" size={18} strokeWidth={1.5} aria-hidden="true" />
    </button>
  );
}
