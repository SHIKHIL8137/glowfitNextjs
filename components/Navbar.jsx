"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (href) => {
    setIsMenuOpen(false);

    const targetId = href.substring(1);

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      if (targetId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/100 transition-all duration-300 ease-in-out"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Logo />
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="text-white hover:text-orange-700 px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-orange-700 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <motion.button
              onClick={() => handleScrollTo("#contact")}
              className="bg-[#C01818] hover:bg-[#8A0F0F] text-white font-bold py-2 px-6 rounded-full text-sm transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className={`${
                  isMenuOpen ? "hidden" : "block"
                } h-6 w-6 transition-transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } h-6 w-6 transition-transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <motion.div
        className="fixed top-0 left-0 h-full w-full bg-black shadow-lg z-50 md:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-red-700 p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col h-full pt-0">
          <div className="flex flex-col h-full pb-16">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => {
                  handleScrollTo(link.href);
                  setIsMenuOpen(false);
                }}
                className="text-white hover:text-orange-700 block px-3 py-4 text-center text-xl font-medium w-full max-w-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {link.name}
              </motion.button>
            ))}

            <div className="mt-auto px-4 pb-8">
              <motion.button
                onClick={() => {
                  handleScrollTo("#contact");
                  setIsMenuOpen(false);
                }}
                className="w-full bg-[#C01818] hover:bg-[#8A0F0F] text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default React.memo(Navbar);