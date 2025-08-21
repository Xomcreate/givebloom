import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping } from "react-icons/fa";

function DonateD() {
  return (
    <div className="w-full bg-black py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaHandsHelping className="mx-auto text-yellow-400 text-6xl md:text-7xl" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          Make a Difference Today
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Your contribution helps us provide education, food, healthcare, and
          shelter to communities in need. Together, we can create lasting change.
        </motion.p>

        {/* Donate Button linking to DonateB */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="#donateForm"
            className="inline-block mt-6 bg-yellow-400 text-black font-semibold px-8 py-3 md:px-12 md:py-4 rounded-xl hover:bg-yellow-500 transition text-lg md:text-xl shadow-lg"
          >
            Donate Now
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default DonateD;
