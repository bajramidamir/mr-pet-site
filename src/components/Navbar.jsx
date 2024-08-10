import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-between items-center p-8 mb-8 bg-white">
      <div>
        <p className="text-2xl font-semibold text-primary">Mr. Pet</p>
      </div>
      {/* Hamburger dugme */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-neutral text-2xl focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Navigation Links */}
      <div
        className={`lg:flex flex-col lg:flex-row lg:space-x-8 lg:items-center ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <li>
            <a
              href="#contact"
              className="text-neutral text-xl font-medium transition-colors duration-300 hover:text-accent"
            >
              Kontakt
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-neutral text-xl font-medium transition-colors duration-300 hover:text-accent"
            >
              Usluge
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-neutral text-xl font-medium transition-colors duration-300 hover:text-accent"
            >
              O nama
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
