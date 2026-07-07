import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaTruck, FaHeartbeat } from 'react-icons/fa';

function VolunteerB() {
  const stats = [
    {
      icon: <FaHandsHelping size={32} />,
      title: "100+ Volunteers",
      description: "On the ground in Venezuela, delivering aid and support to earthquake-affected families every day.",
    },
    {
      icon: <FaTruck size={32} />,
      title: "50+ Partners",
      description: "NGOs, businesses, and local organizations working together to move relief supplies faster.",
    },
    {
      icon: <FaHeartbeat size={32} />,
      title: "Thousands of Lives",
      description: "Families reached with shelter, food, and medical care since the earthquake struck.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative w-full bg-gray-50 py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-6xl mx-auto text-center space-y-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full tracking-wide uppercase"
        >
          Venezuela Earthquake Response
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-extrabold text-gray-800"
        >
          Why Join Our Volunteers & Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Volunteering and partnering with us means standing with families
          in Venezuela as they recover — helping deliver relief where it's
          needed most and rebuild what the earthquake took from them.
        </motion.p>

        {/* Stats cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center text-yellow-500 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default VolunteerB;