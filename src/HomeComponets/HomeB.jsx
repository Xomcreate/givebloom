import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaTruck, FaShieldAlt } from "react-icons/fa";

function HomeB() {
  const steps = [
    {
      icon: <FaHandHoldingHeart className="text-5xl text-yellow-500" />,
      title: "1. Secure Donation",
      desc: "Your emergency contribution funding is instantly allocated to buy critical medical kits, clean water filters, and emergency rations.",
    },
    {
      icon: <FaTruck className="text-5xl text-yellow-500" />,
      title: "2. Rapid Deployment",
      desc: "Our localized network and ground partners bypass disrupted infrastructure to deliver relief directly into the hardest-hit earthquake zones.",
    },
    {
      icon: <FaShieldAlt className="text-5xl text-yellow-500" />,
      title: "3. Ground Recovery",
      desc: "Families receive immediate medical attention, safe temporary shelters, and the essential resources needed to stabilize and rebuild.",
    },
  ];

  // container stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }, // quicker stagger
    },
  };

  // Zoom + drift animation (fast & dynamic)
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.7, x: -60, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }, // fast but smooth
    },
  };

  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading with smooth zoom-in */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4"
        >
          Our Emergency Response Pipeline
        </motion.h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          Every second counts following a seismic disaster. Here is exactly how your support is transformed into immediate on-the-ground crisis relief in Venezuela.
        </p>

        {/* Steps with container animation */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // animate every scroll
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition border-t-4 border-yellow-500"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HomeB;