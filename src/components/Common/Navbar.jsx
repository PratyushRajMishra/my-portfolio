import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md">
      <span className="font-extrabold text-2xl text-indigo-700 dark:text-orange-400 tracking-wide">
        🚀 Portfolio
      </span>
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              className="relative font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-orange-400 transition"
              to={item.to}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
