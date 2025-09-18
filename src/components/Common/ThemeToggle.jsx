import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      console.log("No saved theme, system prefers dark:", prefersDark);
      return prefersDark ? "dark" : "light";
    }
    console.log("Loaded saved theme from localStorage:", savedTheme);
    return savedTheme;
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);

    // Debug logs
    console.log("Applied theme:", theme);
    console.log("Current <html> classList:", document.documentElement.classList.value);
    console.log("localStorage theme:", localStorage.getItem("theme"));
  }, [theme]);

  return (
    <button
      onClick={() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        console.log("Toggling theme ->", newTheme);
        setTheme(newTheme);
      }}
      className="ml-4 p-2 rounded text-xl bg-gray-200 dark:bg-gray-800 transition"
    >
      {theme === "dark" ? "🌙" : "🌞"}
    </button>
  );
};

export default ThemeToggle;
