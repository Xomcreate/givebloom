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
          className="text-2xl md:text-3xl font-bold text-gray-800"
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
          restless heart — mine — the moment news broke of the earthquake that
          shattered communities across Venezuela. I watched families searching
          through rubble, children separated from their parents, and entire
          neighborhoods left with nothing but the clothes on their backs. I
          couldn't look away. I couldn't stay silent.
          <br /> <br />
          With no sponsors, no resources, and no team — just me — I began
          gathering whatever I could: water, blankets, a little money for
          medicine. It was small, but it was something. Soon, a close friend
          saw what I was doing and decided to stand with me. His support
          reminded me that compassion is contagious. Not long after, my parents
          joined in too, believing that even the smallest act of kindness can
          steady a family standing in the wreckage of everything they knew.
          <br /> <br />
          What began as one person refusing to look away has now grown into
          <span className="font-semibold text-yellow-500"> GiveBloom</span> — not
          just a name, but a movement carrying aid, hope, and dignity to the
          families of Venezuela still rebuilding after the earthquake. Every
          donation, every helping hand, and every voice that joins us carries
          the same message:{" "}
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
            alt="Helping hands delivering earthquake relief"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
            loading="lazy" // ✅ lazy load
          />
          <motion.img
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="Donation support for earthquake survivors"
            className="w-full h-72 object-cover rounded-2xl shadow-md"
            loading="lazy" // ✅ lazy load
          />
        </div>
      </div>
    </div>
  );
}

export default AboutC;