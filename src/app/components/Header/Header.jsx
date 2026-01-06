"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.scss";

import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(73);
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "service", path: "/education" },
    { name: "About Us", path: "/about" },

    { name: "Contact", path: "/contact" },
  ];

  // Update header height for ticker
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector("header");
      if (headerElement) {
        const height = headerElement.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty(
          "--header-height",
          `${height}px`
        );
      }
    };
    updateHeaderHeight();
    setTimeout(updateHeaderHeight, 100);
    window.addEventListener("resize", updateHeaderHeight);
    window.addEventListener("load", updateHeaderHeight);
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
      window.removeEventListener("load", updateHeaderHeight);
    };
  }, [isOpen]);

  // SPA navigation handler
  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-gradient-to-b from-[#9CAB84] to-[#89986D] py-3 text-white shadow-md z-50 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-1 px-2 md:px-0">
          {/* Logo */}
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <div className="logo-link flex items-center gap-1">
              <h2>BaneBook</h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex relative space-x-8">
            {navLinks.map((navLink, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(navLink.path)}
                className="text-white text-[20px] hover:text-yellow-400 transition cursor-pointer"
              >
                {navLink.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#0f1224] flex flex-col text-start items-center  text-center space-y-4 py-6">
            {navLinks.map((navLink, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(navLink.path)}
                className="text-gray-300 t hover:text-indigo-400 text-2xl"
              >
                {navLink.name}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
