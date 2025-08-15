import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spectral: ['var(--font-spectral-sc)', 'serif'],
      },
    },
  },
  darkMode: 'media',
};

export default config;
