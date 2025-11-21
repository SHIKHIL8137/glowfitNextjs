"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-[#FFD36E]" />,
      title: "Email",
      content: "gglowfit@gmail.com",
      link: "mailto:gglowfit@gmail.com",
    },
    {
      icon: <FaPhone className="text-2xl text-[#FFD36E]" />,
      title: "Phone",
      content: "+91 7736219344",
      link: "tel:+917736219344",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#FFD36E]" />,
      title: "Location",
      content: "Nayarangahadi, Thrissur 679572",
      link: "https://www.google.com/maps/place/10%C2%B038'34.9%22N+76%C2%B000'49.5%22E/@10.6893268,75.9277419,11.5z/data=!4m4!3m3!8m2!3d10.6430202!4d76.0137574?hl=en&entry=ttu",
    },
  ];

  return (
    <>
      <section 
        id="contact" 
        className=" bg-black py-16 px-4"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            Contact <span className="text-orange-700">Us</span>
          </motion.h2>
          <motion.p
            className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get in touch with us to join our women's fitness community. For general health information, visit 
            <a className="text-[#FFD36E]">Women's Health.gov</a>.
          </motion.p>

          <h2 className="sr-only">Contact GlowFit Women's Gym</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2C1A0D] rounded-lg p-6 text-center flex flex-col items-center cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 },
                }}
              >
                <div className="mb-4 p-3 bg-black rounded-full">{item.icon}</div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-300">{item.content}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(ContactSection);