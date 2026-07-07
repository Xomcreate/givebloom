import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutE() {
  const stats = [
    { number: "10K+", label: "Lives Reached" },
    { number: "500+", label: "Volunteers on Ground" },
    { number: "24/7", label: "Emergency Response" },
  ];

  return (
    <div className="relative w-full bg-gray-50 py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-10">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full tracking-wide uppercase"
        >
          Venezuela Earthquake Relief
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-gray-800"
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
          Every hand extended, every gift given, and every act of kindness
          helps rebuild what the earthquake took from families in Venezuela.{" "}
          <span className="font-semibold text-yellow-500">GiveBloom</span>{" "}
          invites you to join a movement of compassion — because together,
          we can restore homes, dignity, and hope.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 max-w-xl mx-auto py-4"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-extrabold text-yellow-500">
                {stat.number}
              </span>
              <span className="text-sm text-gray-500 mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

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
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
          >
            Donate Today
          </Link>
          <Link
            to="/volunteer"
            className="bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
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
          🌱 Small actions. Big impact. Let's help Venezuela bloom again.
        </motion.p>
      </div>
    </div>
  );
}

export default AboutE;