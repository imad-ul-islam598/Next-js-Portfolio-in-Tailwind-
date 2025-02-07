"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md text-white shadow-lg z-50 border-b-2 border-red-700 rounded-b-lg">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold text-white hover:text-red-700 transition-all duration-300">
          <Link href="#">PORTFOLIO</Link>
        </div>

        {/* Navbar links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="#home"
            className="px-4 py-2 rounded transition-all duration-300 bg-white/10 hover:bg-red-900/80 shadow-md hover:shadow-lg"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="px-4 py-2 rounded transition-all duration-300 bg-white/10 hover:bg-red-900/80 shadow-md hover:shadow-lg"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="px-4 py-2 rounded transition-all duration-300 bg-white/10 hover:bg-red-900/80 shadow-md hover:shadow-lg"
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="px-4 py-2 rounded transition-all duration-300 bg-white/10 hover:bg-red-900/80 shadow-md hover:shadow-lg"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 rounded transition-all duration-300 bg-white/10 hover:bg-red-900/80 shadow-md hover:shadow-lg"
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/10 backdrop-blur-lg text-white px-6 py-4 shadow-lg rounded-lg">
          <Link
            href="#home"
            className="block py-2 bg-black/10 hover:bg-black/50 hover:text-red-700 shadow-md hover:shadow-lg rounded transition-all"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block py-2 bg-black/10 hover:bg-black/50 hover:text-red-700 shadow-md hover:shadow-lg rounded transition-all"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block py-2 bg-black/10 hover:bg-black/50 hover:text-red-700 shadow-md hover:shadow-lg rounded transition-all"
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="block py-2 bg-black/10 hover:bg-black/50 hover:text-red-700 shadow-md hover:shadow-lg rounded transition-all"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="block py-2 bg-black/10 hover:bg-black/50 hover:text-red-700 shadow-md hover:shadow-lg rounded transition-all"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
