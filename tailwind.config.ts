import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        spectral: ["var(--font-spectral)", "serif"],
      },
    },
  },
  darkMode: "class", // We'll toggle with a class
};

export default config;
