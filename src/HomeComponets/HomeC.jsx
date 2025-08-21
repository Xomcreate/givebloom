import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import JPG images from assets
import educationImg from "../assets/edu.jpg";
import healthImg from "../assets/per.jpg";
import foodImg from "../assets/foo.jpg";
import shelterImg from "../assets/dig.jpg";

function HomeC() {
  const categories = [
    {
      title: "Education Support",
      desc: "Help children gain access to quality education and school supplies.",
      image: educationImg,
      color: "bg-yellow-100 text-yellow-700 border-yellow-300",
    },
    {
      title: "Healthcare Aid",
      desc: "Provide medical assistance and life-saving treatments to those in need.",
      image: healthImg,
      color: "bg-green-100 text-green-700 border-green-300",
    },
    {
      title: "Food for All",
      desc: "Support feeding programs and fight hunger in vulnerable communities.",
      image: foodImg,
      color: "bg-red-100 text-red-700 border-red-300",
    },
    {
      title: "Shelter & Clothing",
      desc: "Give shelter and clothing to homeless families and children.",
      image: shelterImg,
      color: "bg-blue-100 text-blue-700 border-blue-300",
    },
  ];

  // animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-12"
        >
          Donation Categories
        </motion.h2>

        {/* Categories */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`rounded-2xl shadow-xl border ${cat.color} overflow-hidden flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow items-center">
                <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>
                <p className="text-sm mb-5">{cat.desc}</p>
                <Link
                  to="/donate"
                  className="mt-auto bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Donate
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HomeC;
