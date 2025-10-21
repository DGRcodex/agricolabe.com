// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // no se activa si no añades la clase 'dark' al <html>
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {}, // los tokens principales los declaramos en @theme de globals.css (v4)
  },
  plugins: [],
};

export default config;
