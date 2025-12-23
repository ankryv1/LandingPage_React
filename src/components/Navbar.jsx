import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
            <img src={logo} width={150} height={15} alt="HomeCraft" />
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl pr-2 focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>

        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>

          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>

          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>

          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Testimonials
          </a>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute bg-neutral-50 w-full py-5 px-4 mt-2 border-b-4`}
      >
                  <a href="#Header" className="uppercase text-lg font-medium block py-2 tracking-wide" onClick={() => setIsOpen(false)}>
            Home
          </a>

          <a href="#about" className="uppercase text-lg font-medium block py-2 tracking-wide" onClick={() => setIsOpen(false)}>
            About
          </a>

          <a href="#Projects" className="uppercase text-lg font-medium block py-2 tracking-wide" onClick={() => setIsOpen(false)}>
            Projects
          </a>

          <a href="#Header" className="uppercase text-lg font-medium block py-2 tracking-wide" onClick={() => setIsOpen(false)}>
            Testimonials
          </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
