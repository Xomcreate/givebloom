import React from "react";
import { motion } from "framer-motion";

function DonateC() {
  const plans = [
    {
      title: "Monthly Giving",
      price: "₦20,000 / month",
      description:
        "Support us every month to sustain food, health, and education programs.",
    },
    {
      title: "Quarterly Giving",
      price: "₦50,000 / quarter",
      description:
        "Make an impact every 3 months by funding sustainable community projects.",
    },
    {
      title: "Yearly Giving",
      price: "₦200,000 / year",
      description:
        "One-time yearly support that helps us plan bigger projects and long-term solutions.",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-black/5 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Recurring Donation Plans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 max-w-2xl mx-auto"
        >
          Choose a donation plan that works for you and create lasting change.
        </motion.p>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
              <p className="text-2xl font-bold text-yellow-400 mt-4">{plan.price}</p>
              <p className="text-gray-700 mt-3">{plan.description}</p>
              <button className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-500 transition">
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DonateC;
