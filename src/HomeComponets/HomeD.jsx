import React from "react";
import { motion } from "framer-motion";

function HomeD() {
  const points = [
    {
      title: "Empower Communities",
      desc: "Your gift helps build stronger, self-reliant communities by providing education, clean water, and healthcare.",
      emoji: "🌍",
    },
    {
      title: "Support Children",
      desc: "Every donation gives children access to food, shelter, and the chance to dream bigger.",
      emoji: "👶",
    },
    {
      title: "Create Lasting Change",
      desc: "Instead of a one-time relief, your contribution supports sustainable programs that change lives long-term.",
      emoji: "✨",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mb-6"
        >
          Why Your Gift Matters
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Every gift you make is more than a donation—it’s hope, love, and a step
          toward a brighter tomorrow for those in need.
        </motion.p>

        {/* Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition"
            >
              <div className="text-5xl mb-4">{point.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeD;
