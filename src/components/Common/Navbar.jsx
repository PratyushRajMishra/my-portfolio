import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-4 bg-transparent flex justify-center">
      {/* Centered nav links for desktop */}
      <div className="hidden sm:flex">
        <ul className="flex gap-6 uppercase text-white">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                className="font-medium hover:text-indigo-400 transition"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Theme toggle button (sticky on top-right) */}
      <button className="fixed top-4 right-6 z-50">
        <ThemeToggle />
      </button>

      {/* Mobile menu button (sticky on top-left) */}
      <button
        className="fixed top-4 left-6 text-white text-2xl z-50 sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden mt-16 flex justify-center w-full">
          <ul className="flex flex-col gap-4 uppercase text-white text-center bg-black/70 backdrop-blur-md rounded-lg p-6 w-11/12 mx-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  className="font-medium hover:text-indigo-400 transition block"
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
