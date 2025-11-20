"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LazyImage from "./LazyImage";

gsap.registerPlugin(ScrollTrigger);

export const ServiceSection = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");

      gsap.from(cards, {
        opacity: 0,
        y: 40,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "transform",
        force3D: false,
        scrollTrigger: {
          trigger: sectionRef.current,  
          start: "top 80%",            
          once: true,                   
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  const services = [
    { name: "Yoga", image: "/assets/cards/yoga.jpg",
      description: "Improve flexibility, balance, and mental well-being through guided yoga sessions designed specifically for women."
    },
    { name: "Zumba", image: "/assets/cards/zumba.jpg",
      description: "High-energy dance workouts that combine fun music with easy-to-follow moves to burn calories and boost confidence."
    },
    { name: "Weight Training", image: "/assets/cards/weightTraining.jpg",
      description: "Build lean muscle and bone density with specialized training programs tailored for women's body composition."
    },
    { name: "Cardio", image: "/assets/cards/cardio.jpg",
      description: "Effective cardiovascular training to improve stamina and heart health, designed with women's fitness goals in mind."
    },
    { name: "Physique Transformation", image: "/assets/cards/functionalStrengthening.jpg",
      description: "Safe and effective workouts for new mothers to rebuild strength and confidence after pregnancy."
    },
    { name: "Body Transformation", image: "/assets/cards/physiqueTransformation.jpg",
      description: "Personalized programs to reshape your body and achieve your unique fitness goals as a woman."
    },
    { name: "CrossFit", image: "/assets/cards/crossfit.jpg",
      description: "Targeted exercises to improve bone density and prevent osteoporosis, crucial for women's long-term health."
    },
    { name: "Aerobics", image: "/assets/cards/aerobics.jpg",
      description: "Holistic approach combining physical exercise with mental wellness techniques for overall well-being."
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-black py-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Our <span className="text-orange-700">Services</span>
        </h2>

        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Discover our range of specialized fitness programs designed exclusively for women
        </p>

        {/* GRID */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
