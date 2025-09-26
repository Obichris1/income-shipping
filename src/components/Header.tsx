import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:px-10 px-5 py-7 bg-black shadow-md h-24 md:h-20 relative">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-base md:text-lg text-white uppercase font-bold">
          Income Shipping marine and oil services
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <a href="/" className="hover:scale-105 text-white transition-colors">
            Home
          </a>
          <a
            href="/about"
            className="hover:scale-105 text-white transition-colors"
          >
            About
          </a>
          <a
            href="/services"
            className="hover:scale-105 text-white transition-colors"
          >
            Services
          </a>
          <a
            href="/contact"
            className="hover:scale-105 text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden !text-white !bg-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-24 left-0 w-full bg-black shadow-lg flex flex-col items-center gap-6 transition-all duration-300 py-6 z-50">
          <a
            href="/"
            className="text-white hover:scale-105 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:scale-105 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/services"
            className="text-white hover:scale-105 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-white hover:scale-105 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
