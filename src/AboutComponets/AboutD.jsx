import React, { useEffect, useRef, useState, useMemo } from "react";
import { FaHandsHelping, FaUsers, FaMapMarkerAlt, FaHeartbeat } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

function AboutD() {
  const [started, setStarted] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // Memoizing stats to prevent unnecessary re-renders in the scroll listener dependency array
  const stats = useMemo(() => [
    { 
      icon: <FaUsers className="text-yellow-400 text-4xl" />, 
      value: 2500, 
      label: "Survivors Safely Reached", 
      title: "Immediate Rescue Relief" 
    },
    { 
      icon: <FaHandsHelping className="text-yellow-400 text-4xl" />, 
      value: 120, 
      label: "Emergency Shipments Delivered", 
      title: "Vital Supply Dispatches"
    },
    { 
      icon: <FaMapMarkerAlt className="text-yellow-400 text-4xl" />, 
      value: 12, 
      label: "Affected Zones Stabilized", 
      title: "Hardest-Hit Communities" 
    },
    { 
      icon: <FaHeartbeat className="text-yellow-400 text-4xl" />, 
      value: 85, 
      label: "Active On-Ground Responders", 
      title: "Crisis Action Units" 
    },
  ], []);

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
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
          Our Crisis Impact & Metrics
        </h2>
        <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          At <span className="text-yellow-400 font-semibold">GiveBloom</span>, 
          every figure represents a family supported, a life saved, or a vital community grid reinforced after structural disaster. Our metrics focus on speed, accountability, and direct emergency impact.
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
            className="bg-[#2a2a2a] shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition border-b-2 border-transparent hover:border-yellow-400"
          >
            <div className="p-3 bg-[#1a1a1a] rounded-full shadow-inner">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mt-4">
              {item.title}
            </h3>
            <p className="text-3xl font-extrabold text-yellow-400 mt-2">
              {counts[index]}+
            </p>
            <p className="text-gray-400 text-sm mt-2 font-medium">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AboutD;