import React, { useState, useEffect } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function DonateA() {
  const texts = [
    "Give Hope Today",
    "Change Lives Forever",
    "Your Gift Matters",
    "Together We Can",
    "Be the Reason Someone Smiles",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change text every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 5 unique animations
  const animations = [
    { initial: { y: -60, opacity: 0 }, animate: { y: 0, opacity: 1 } },
    { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
    { initial: { scale: 0.5, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
    { initial: { rotate: -10, opacity: 0 }, animate: { rotate: 0, opacity: 1 } },
    { initial: { y: 80, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  ];

  return (
    <div
      className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(/Images/mich.jpg)` }} // ✅ use public/images
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4 md:px-8">
        <FaHandsHelping className="mx-auto text-5xl md:text-7xl mb-4 text-yellow-400" />

        {/* Animated headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={animations[currentIndex].initial}
            animate={animations[currentIndex].animate}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4"
          >
            {texts[currentIndex]}
          </motion.h1>
        </AnimatePresence>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-200">
          Every contribution you make helps us provide education, food,
          healthcare, and shelter to communities in need. Together, we create
          lasting impact.
        </p>

        {/* Donate Button (scrolls to DonateB) */}
        <a href="#donateForm">
          <button className="bg-yellow-400 text-black font-semibold px-6 md:px-10 py-3 md:py-4 rounded-lg hover:bg-yellow-500 transition text-base md:text-lg shadow-lg">
            Donate Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default DonateA;
