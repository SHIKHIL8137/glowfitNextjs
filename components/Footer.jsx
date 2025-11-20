"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "./Logo";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (href) => {
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

  const socialMedia = [
    {
      icon: <FaFacebook className="text-xl text-white" />,
      name: "Facebook",
      url: "",
    },
    {
      icon: <FaInstagram className="text-xl text-white" />,
      name: "Instagram",
      url: "https://www.instagram.com/glowfit0071/",
    },
    {
      icon: <FaTwitter className="text-xl text-white" />,
      name: "Twitter",
      url: "",
    },
    {
      icon: <FaYoutube className="text-xl text-white" />,
      name: "YouTube",
      url: "",
    },
  ];

  return (
    <footer>
      <div className="bg-[#2C1A0D] text-white border-t-2 border-[#C01818]">
        <div className="container mx-auto max-w-6xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="flex flex-col items-center md:items-start gap-3">
                <Logo />

                <p className="text-gray-300 max-w-xs md:max-w-sm">
                  Empowering women to achieve their strongest, healthiest selves
                  through personalized fitness programs and a supportive
                  community.
                </p>
              </div>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {socialMedia.map(
                  (social, index) =>
                    social?.url !== "" && (
                      <motion.a
                        key={index}
                        href={social.url}
                        className="bg-black bg-opacity-30 rounded-full p-2 inline-flex items-center justify-center"
                        whileHover={{
                          y: -3,
                          backgroundColor: "#C01818",
                          transition: { duration: 0.3 },
                        }}
                      >
                        {social.icon}
                      </motion.a>
                    )
                )}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-[#FFD36E]">
                Quick Links
              </h3>
              <div className="flex flex-col items-center">
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

            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-[#FFD36E]">
                Contact Info
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Name: Preneeshya Subash</li>
                <li>Email: gglowfit@gmail.com</li>
                <li>Phone:+91 7736219344</li>
                <li>Pincode: 679572</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700"></div>
      <div className=" bg-black mx-auto min-w-full py-2 text-center">
        <p className="text-gray-400">
          &copy; {currentYear} GlowFit Women's Gym. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
