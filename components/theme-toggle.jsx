"use client";

import { useEffect, useState } from "react";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

function getInitialTheme() {
  if (typeof window === "undefined") {
    return THEMES.LIGHT;
  }

  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === THEMES.LIGHT || savedTheme === THEMES.DARK) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:bg-white dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-900"
    >
      <span className="text-base" aria-hidden="true">
        {theme === THEMES.DARK ? "☀" : "☾"}
      </span>
      {theme === THEMES.DARK ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
