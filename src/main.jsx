import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Initialize theme
const initializeTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  console.log("Saved theme in localStorage:", savedTheme);
  console.log("System prefers dark:", prefersDark);

  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
    console.log("Applied theme: dark");
  } else {
    document.documentElement.classList.remove("dark");
    console.log("Applied theme: light");
  }

  console.log("Current <html> classList:", document.documentElement.classList.value);
};

initializeTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
