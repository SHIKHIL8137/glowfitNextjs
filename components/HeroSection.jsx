"use client";

import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/bg/hero-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8 }}
        role="presentation"
      />

      <div className="relative z-10 text-center px-4 py-16 md:py-24 w-full max-w-4xl mx-auto">
        <motion.h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <Typewriter
            words={["Spark Your Fitness Journey With GlowFit"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Designed exclusively for women to build confidence, strength, and community
        </motion.p>

        <motion.h2
          className="sr-only"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Women's Fitness Programs at GlowFit
        </motion.h2>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
