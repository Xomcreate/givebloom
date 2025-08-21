import React, { useEffect, useRef, useState } from "react";
import { FaHandsHelping, FaUsers, FaGlobe, FaHeart } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

function AboutD() {
  const [started, setStarted] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const stats = [
    { 
      icon: <FaUsers className="text-yellow-400 text-4xl" />, 
      value: 1000, 
      label: "Needy People Reached", 
      title: "Extending Our Hands" 
    },
    { 
      icon: <FaHandsHelping className="text-yellow-400 text-4xl" />, 
      value: 50, 
      label: "Successful Donations", 
      title: "Acts of Kindness"   // ✅ updated from "Turning Compassion into Action"
    },
    { 
      icon: <FaGlobe className="text-yellow-400 text-4xl" />, 
      value: 5, 
      label: "Communities Impacted", 
      title: "Building Global Bridges" 
    },
    { 
      icon: <FaHeart className="text-yellow-400 text-4xl" />, 
      value: 30, 
      label: "Supporters & Friends", 
      title: "United by Kindness" 
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && !started) {
        setStarted(true);
        controls.start("visible");

        stats.forEach((stat, i) => {
          let current = 0;
          const increment = stat.value / 60;
          const counter = setInterval(() => {
            current += increment;
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[i] = Math.min(Math.round(current), stat.value);
              return newCounts;
            });
            if (current >= stat.value) clearInterval(counter);
          }, 30);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [started, controls, stats]);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#1a1a1a] py-16 px-6 md:px-12 text-white"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
       Our Goals & Impact  {/* ✅ updated from "Our Goals & Impact" */}
        </h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          At <span className="text-yellow-400 font-semibold">GiveBloom</span>, 
          we are dedicated to restoring hope, dignity, and opportunities for the less privileged.  
          Our goals reflect not only numbers, but the lives and communities we touch.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{ visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#2a2a2a] shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-white mt-4">
              {item.title}
            </h3>
            <p className="text-2xl font-bold text-yellow-400 mt-2">
              {counts[index]}+
            </p>
            <p className="text-gray-300 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutD;
