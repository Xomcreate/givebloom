import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomeC() {
  const categories = [
    {
      title: "Emergency Shelter",
      desc: "Help displaced families in Venezuela find safe, temporary housing after the earthquake.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRydTZXe1GNTTYUYjyl0nuG2t3yuXjQ14aHnb-8lEKCQ&s=10",
      color: "bg-blue-100 text-blue-700 border-blue-300",
    },
    {
      title: "Medical Aid",
      desc: "Provide urgent medical care and supplies to earthquake survivors and injured victims.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS_moBmF_CRktpXElegFrSEO2ibdzr8Fa4AlJYSWsnRg&s=10",
      color: "bg-red-100 text-red-700 border-red-300",
    },
    {
      title: "Food & Water",
      desc: "Deliver clean water and emergency food supplies to affected communities in Venezuela.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQ3uT-IVme06k630wP3uMCjazdz0LCLQ2fbonQtcSFw&s=10",
      color: "bg-green-100 text-green-700 border-green-300",
    },
    {
      title: "Rebuilding Homes",
      desc: "Support reconstruction efforts to help families rebuild homes destroyed by the earthquake.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupyJTBYVkBNfx24tAvQMxpYK6UEmAljA36wFBkVidpg&s=10",
      color: "bg-yellow-100 text-yellow-700 border-yellow-300",
    },
  ];

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
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4"
        >
          Venezuela Earthquake Relief
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Your donation can bring urgent relief to families affected by the earthquake in Venezuela. Choose a cause below to help.
        </motion.p>

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
                loading="lazy" // ✅ lazy load
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