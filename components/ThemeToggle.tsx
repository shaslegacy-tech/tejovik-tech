"use client";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = theme ?? resolvedTheme ?? "system";
  const next = current === "light" ? "dark" : "light";
  return (
    <button
      onClick={() => setTheme(next)}
      className={`${className} px-3 py-2 rounded-2xl border border-gray-200 dark:border-gray-700 text-sm hover:shadow`}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {current === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}