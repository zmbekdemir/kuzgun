"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Load saved theme once on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved === "dark";
    setIsDark(dark);
    document.body.classList.toggle("dark", dark);
  }, []);

  // Toggle and persist
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition hover:scale-110
      ${isDark ? "bg-[#A49D96]" : "bg-[#9E7946]"}`}
      aria-label="Toggle Theme"
    >
      <Image src="/icon.png" alt="Toggle Theme" width={24} height={24} />
    </button>
  );
}
