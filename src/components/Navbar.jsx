import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex w-full justify-between items-center px-8 py-4 bg-white">
      {/* Left Part */}
      <div className="flex-grow">
        <ul className="hidden lg:flex flex-row space-x-8">
          <li>
            <a
              href="#services"
              className="text-primary text-xl font-medium transition-colors duration-300 hover:text-accent"
            >
              Usluge
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-primary text-xl font-medium transition-colors duration-300 hover:text-accent"
            >
              O nama
            </a>
          </li>
        </ul>
      </div>

      {/* Center Part (Logo) */}
      <div className="flex-grow-0">
        <img
          src="/images/logo.png"
          alt="logo"
          className="md:w-72 w-44 mx-auto"
        />
      </div>

      {/* Right Part */}
      <div className="flex-grow flex justify-end">
        <ul className="hidden lg:flex flex-row space-x-8">
          <li>
            <a
              href="#contact"
              className="text-primary text-xl font-medium transition-colors duration-300 hover:text-accent"
            >
              Kontakt
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-primary text-xl font-medium transition-colors duration-300 hover:text-accent"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Button for Mobile */}
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

      {/* Mobile Navigation Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-10`}
      >
        <ul className="flex flex-col space-y-4 p-4">
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
              href="#faq"
              className="text-neutral text-xl font-medium transition-colors duration-300 hover:text-accent"
            >
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
