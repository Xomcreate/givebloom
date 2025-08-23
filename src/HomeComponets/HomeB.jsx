import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaTruck, FaSmile } from "react-icons/fa";

function HomeB() {
  const steps = [
    {
      icon: <FaHandHoldingHeart className="text-5xl text-yellow-400" />,
      title: "You Give",
      desc: "Your kind contribution provides food, clothing, and resources to communities in need.",
    },
    {
      icon: <FaTruck className="text-5xl text-yellow-400" />,
      title: "We Deliver",
      desc: "Our volunteers and partners ensure every donation reaches those who need it most.",
    },
    {
      icon: <FaSmile className="text-5xl text-yellow-400" />,
      title: "They Thrive",
      desc: "Families find hope, children smile again, and lives are transformed by your generosity.",
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
          className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-12"
        >
          How It Works
        </motion.h2>

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
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HomeB;
