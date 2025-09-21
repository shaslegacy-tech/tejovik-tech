import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css,html,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,css,html,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,css,html,mdx}"
  ],

  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d6f1ff",
          200: "#aee3ff",
          300: "#76ceff",
          400: "#36b3ff",
          500: "#0f98ff",
          600: "#0077d6",
          700: "#005ca6",
          800: "#004a84",
          900: "#063e6b"
        }
      }
    }
  },
  plugins: []
};
export default config;
