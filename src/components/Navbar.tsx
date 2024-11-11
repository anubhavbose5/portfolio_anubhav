"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 p-6 bg-primary text-accent shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="#about" className="hover:text-secondary">
            About
          </Link>
          <Link href="#projects" className="hover:text-secondary">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-secondary">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-secondary">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link
            href="#about"
            className="block hover:text-secondary"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block hover:text-secondary"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="block hover:text-secondary"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="block hover:text-secondary"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
