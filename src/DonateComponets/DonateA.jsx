import React, { useState, useEffect } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function DonateA() {
  const texts = [
    "Give Hope to Venezuela",
    "Transform Lives, Create Futures",
    "Your Solidarity Matters",
    "Juntos Podemos / Together We Can",
    "Be the Reason a Community Thrives",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change text every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Polished slide-fade transitions for premium look
  const animationVariants = {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -15, opacity: 0 },
  };

  return (
    <div
      className="w-full h-[65vh] md:h-[80vh] bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(/Images/mich.jpg)` }} // ✅ keeping public/images path
    >
      {/* 
        Modern Deep Palette Overlay: 
        Rich gradient styling providing exceptional legibility 
        while carrying deep Venezuelan-inspired blue undertones.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/75 via-slate-950/85 to-black/90"></div>

      {/* Venezuela Flag Tricolor Bottom Strip Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 flex z-10">
        <div className="w-1/3 h-full bg-yellow-400"></div>
        <div className="w-1/3 h-full bg-blue-600"></div>
        <div className="w-1/3 h-full bg-red-600"></div>
      </div>

      {/* Hero Body Content */}
      <div className="relative text-center text-white px-6 md:px-8 max-w-4xl mx-auto space-y-6 md:space-y-8">
        
        {/* Frosted Icon Design */}
        <div className="inline-flex items-center justify-center p-3.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl mb-1 animate-pulse">
          <FaHandsHelping className="text-3xl sm:text-4xl md:text-5xl text-yellow-400" />
        </div>

        {/* Dynamic Typography Element */}
        <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-3xl"
            >
              {texts[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtext description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
          Every contribution directly empowers essential localized operations—providing critical food packages, medical supplies, educational materials, and structural refuge to Venezuelan families in need.
        </p>

        {/* Action Button Container */}
        <div className="pt-2">
          <a 
            href="#donateForm"
            className="inline-block bg-yellow-400 text-slate-950 font-extrabold px-8 sm:px-10 py-4 rounded-xl hover:bg-yellow-500 transition-all duration-200 shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/30 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base md:text-lg tracking-wide uppercase"
          >
            Donate Now
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default DonateA;