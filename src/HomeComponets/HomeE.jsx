import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaUsers } from "react-icons/fa";

function HomeE() {
  const options = [
    {
      icon: <FaHandsHelping className="text-5xl text-yellow-400" />,
      title: "Become a Volunteer",
      desc: "Join our team of passionate volunteers bringing hope and relief to communities. Your time can change lives.",
    },
    {
      icon: <FaUsers className="text-5xl text-yellow-400" />,
      title: "Partner With Us",
      desc: "Collaborate with us as a business, NGO, or institution. Together, we can multiply our impact and reach more people.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">
            Join the Mission
          </h2>
          <p className="text-lg text-gray-700">
            Whether you want to give your time, skills, or resources, there’s a
            place for you in our mission. Together, we can create lasting change
            in our communities.
          </p>
        </motion.div>

        {/* Right: Options */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-8"
        >
          {options.map((opt, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-xl p-8 text-left flex flex-col items-start hover:shadow-2xl hover:scale-105 transition"
            >
              <div className="mb-4">{opt.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">
                {opt.title}
              </h3>
              <p className="text-gray-700">{opt.desc}</p>
              <button className="mt-4 bg-yellow-400 text-white font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 transition">
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HomeE;
