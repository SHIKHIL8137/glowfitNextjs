"use client";

import React from "react";
import { motion } from "framer-motion";
import LazyImage from "./LazyImage";

const ServiceSection = () => {
  const services = [
    {
      name: "Yoga",
      image: "/assets/cards/yoga.webp",
      description:
        "Improve flexibility, balance, and mental well-being through guided yoga sessions designed specifically for women.",
    },
    {
      name: "Zumba",
      image: "/assets/cards/zumba.webp",
      description:
        "High-energy dance workouts that combine fun music with easy-to-follow moves to burn calories and boost confidence.",
    },
    {
      name: "Weight Training",
      image: "/assets/cards/weightTraining.webp",
      description:
        "Build lean muscle and bone density with specialized training programs tailored for women's body composition.",
    },
    {
      name: "Cardio",
      image: "/assets/cards/cardio.webp",
      description:
        "Effective cardiovascular training to improve stamina and heart health, designed with women's fitness goals in mind.",
    },
    {
      name: "Physique Transformation",
      image: "/assets/cards/functionalStrengthening.webp",
      description:
        "Safe and effective workouts for new mothers to rebuild strength and confidence after pregnancy.",
    },
    {
      name: "Body Transformation",
      image: "/assets/cards/physiqueTransformation.webp",
      description:
        "Personalized programs to reshape your body and achieve your unique fitness goals as a woman.",
    },
    {
      name: "CrossFit",
      image: "/assets/cards/crossfit.webp",
      description:
        "Targeted exercises to improve bone density and prevent osteoporosis, crucial for women's long-term health.",
    },
    {
      name: "Aerobics",
      image: "/assets/cards/aerobics.webp",
      description:
        "Holistic approach combining physical exercise with mental wellness techniques for overall well-being.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="services"
      className="min-h-screen bg-black py-16 px-4"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          id="services-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Our <span className="text-orange-700">Services</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover our range of specialized fitness programs designed
          exclusively for women. Learn more about 
          <a className="text-[#FFD36E]">yoga benefits</a>, 
          <a className="text-[#FFD36E]">strength training for women</a>, and 
          <a className="text-[#FFD36E]">cardiovascular health</a>.
        </motion.p>

        <motion.h2 className="sr-only">
          Our Fitness Services Include Yoga, Zumba, Weight Training, Cardio, Physique Transformation, Body Transformation, CrossFit, and Aerobics
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="service-card bg-[#2C1A0D] rounded-lg shadow-xl overflow-hidden transition-transform duration-300 border-t-4 border-[#C01818] hover:scale-[1.05] hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.name}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
