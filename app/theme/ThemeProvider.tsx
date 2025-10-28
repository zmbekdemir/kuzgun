"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  // === Apply class to <body> ===
  const applyThemeClass = (t: Theme) => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(t);
  };

  // === Load on first render ===
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");

    setThemeState(initial);
    applyThemeClass(initial);
  }, []);

  // === Public setters ===
  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
    applyThemeClass(t);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      toggleTheme,
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
