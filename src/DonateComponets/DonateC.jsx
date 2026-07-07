import React from "react";
import { motion } from "framer-motion";

function DonateC() {
  const plans = [
    {
      title: "Immediate Relief",
      price: "$25 / month",
      description:
        "Provides monthly emergency food parcels, clean drinking water, and hygiene kits to displaced families.",
    },
    {
      title: "Medical & Rescue Support",
      price: "$75 / quarter",
      description:
        "Funds mobile medical clinics, trauma supplies, and search-and-rescue teams working in affected zones.",
    },
    {
      title: "Rebuild & Recover",
      price: "$300 / year",
      description:
        "Sustains long-term recovery by financing structural damage assessments and rebuilding collapsed community infrastructure.",
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
          className="text-2xl md:text-3xl font-extrabold text-gray-900"
        >
          Venezuela Earthquake Emergency Response
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 max-w-2xl mx-auto"
        >
          Thousands have been displaced and infrastructure has collapsed. Choose a recurring support plan to provide immediate relief and long-term recovery.
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

              {/* Select Plan button links to donation form */}
              <a
                href="#donateForm"
                className="mt-6 w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-500 transition text-center"
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DonateC;