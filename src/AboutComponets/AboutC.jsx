import React from "react";
import { motion } from "framer-motion";

function AboutC() {
  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          From One Heart to a Movement
        </motion.h2>

        {/* Story Content */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          GiveBloom was never planned as an organization. It was born from a
          restless heart — mine. Every day, I walked past people who had nothing:
          children with hungry eyes, mothers without hope, fathers broken by
          circumstances. I couldn’t ignore their pain. I couldn’t stay silent.
          <br /> <br />
          With no sponsors, no resources, and no team — just me — I began to
          give the little I had. It was small, but it was something. Soon, a
          close friend saw my heart and decided to stand with me. His support
          reminded me that compassion is contagious. Not long after, my parents
          joined in, believing that even the smallest act of kindness can change
          the world for someone.
          <br /> <br />
          What began as one person refusing to look away has now grown into
          <span className="font-semibold text-yellow-500"> GiveBloom</span> — not
          just a name, but a movement of love, hope, and dignity for the needy.
          Every donation, every helping hand, and every voice that joins us
          carries the same message:{" "}
          <em className="italic">no one should be left behind.</em>
        </motion.p>

        {/* Image Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <motion.img
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="Helping hands"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
          <motion.img
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="Donation support"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutC;
