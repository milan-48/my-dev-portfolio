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
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-slate-300/90 bg-white/80 px-3.5 text-xs font-semibold text-slate-700 backdrop-blur transition hover:bg-slate-100 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:bg-slate-800"
    >
      <span className="text-sm leading-none" aria-hidden="true">
        {theme === THEMES.DARK ? "☀" : "☾"}
      </span>
      {theme === THEMES.DARK ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
