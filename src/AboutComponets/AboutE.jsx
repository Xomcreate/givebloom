import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutE() {
  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Together, We Can Bloom Hope
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          Every hand extended, every coin given, and every act of kindness
          builds a future where no one is forgotten.{" "}
          <span className="font-semibold text-yellow-500">
            GiveBloom
          </span>{" "}
          invites you to join a movement of compassion — because together, 
          we can restore dignity and create lasting change.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/donate"
            className="bg-yellow-400 hover:bg-yellow-400 text-white px-8 py-3 rounded-full font-semibold shadow-md transition"
          >
            Donate Today
          </Link>
          <Link
            to="/volunteer"
            className="bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-full font-semibold shadow-md transition"
          >
            Join as Volunteer
          </Link>
        </motion.div>

        {/* Sub-footer tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-sm text-gray-500 mt-6 italic"
        >
          🌱 Small actions. Big impact. Let’s make the world bloom.
        </motion.p>
      </div>
    </div>
  );
}

export default AboutE;
