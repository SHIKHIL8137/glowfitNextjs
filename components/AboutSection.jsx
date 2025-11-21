"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-16 px-4 relative"
        style={{
          backgroundImage: "url('/assets/bg/about-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
            >
              <h2 
                id="about-heading"
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                About GlowFit <span className="text-orange-700">Women's Gym</span>
              </h2>
              <h2 className="sr-only">About GlowFit Women's Gym</h2>
              <p className="text-gray-300 text-lg mb-6">
                At GlowFit Women's Gym, we're dedicated to empowering women to achieve
                their strongest, healthiest selves. Our women-focused facility
                and expert trainers provide a supportive environment where you
                can transform your fitness journey with confidence.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Founded with the vision of creating a welcoming fitness space exclusively for women,
                we understand the unique needs and goals of our members. Our
                personalized approach ensures that every workout is tailored to
                help you reach your full potential in a judgment-free environment.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                Our mission is to create a welcoming, empowering space where
                women can focus entirely on their fitness goals. We believe that
                fitness is not just about physical strength, but also about
                building confidence, resilience, and a sense of community among women.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                With cutting-edge equipment, diverse class offerings designed specifically for women, and a team
                of certified trainers who are passionate about women's health and
                wellness, GlowFit Women's Gym is more than just a gym - it's a community
                of women supporting each other on their fitness journeys. We follow evidence-based practices from 
                <a className="text-[#FFD36E] ">leading women's health resources</a> and 
                <a className="text-[#FFD36E] ">certified fitness organizations</a> to ensure the best results for our members.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-[#2C1A0D] bg-opacity-80 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Why Choose GlowFit <span className="text-orange-700">Women's Gym?</span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Empowering environment exclusively for women
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Personalized training programs tailored to women's goals
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    State-of-the-art equipment and women-focused facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Expert trainers certified in women's fitness
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Diverse class offerings including women's yoga, dance fitness, and strength training
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    Supportive community of like-minded women
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(AboutSection);