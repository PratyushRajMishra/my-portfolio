import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const linkClasses = isHome
    ? "text-white"
    : "text-gray-800 dark:text-white";

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 py-4 flex justify-center transition-all duration-300 
        ${isHome 
          ? "bg-transparent" 
          : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-md relative"
        }
      `}
    >
      {/* Gradient shadow only for non-home pages */}
      {!isHome && (
        <div className="absolute inset-x-0 -bottom-2 h-[3px] 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
          opacity-60 blur-sm pointer-events-none"
        />
      )}

      {/* Desktop nav */}
      <div className="hidden sm:flex relative">
        <ul className={`flex gap-8 uppercase tracking-wide ${linkClasses}`}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className={`relative font-medium transition-colors ${
                    isActive ? "text-indigo-500 dark:text-indigo-400" : ""
                  }`}
                >
                  {item.label}
                  {/* Active & hover underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ${
                      isActive ? "w-full" : "group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Theme toggle */}
      <button className="fixed top-4 right-6 z-50">
        <ThemeToggle />
      </button>

      {/* Mobile menu button */}
      <button
        className={`fixed top-4 left-6 text-2xl z-50 sm:hidden ${linkClasses}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full px-4 animate-fade-in-down">
          <ul
            className={`flex flex-col gap-4 uppercase text-center rounded-xl p-6 shadow-lg 
              ${isHome
                ? "text-white bg-black/80 backdrop-blur"
                : "text-gray-800 dark:text-white bg-white/90 dark:bg-gray-900/90"
              }`}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`block font-medium transition-colors ${
                      isActive ? "text-indigo-500 dark:text-indigo-400" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
