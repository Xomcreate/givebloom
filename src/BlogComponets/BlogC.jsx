import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

function BlogC() {
  const sectionRef = useRef(null);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#1a1a1a] py-16 px-6 md:px-12 text-white"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <FaEnvelopeOpenText className="text-yellow-400 text-5xl mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          Join the <span className="text-yellow-400 font-semibold">GiveBloom-</span>
           community to get the latest updates, inspiring stories, and ways you can make an impact.  
        </p>
      </motion.div>

      {/* Subscribe Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-yellow-400 text-[#1a1a1a] font-semibold hover:bg-yellow-300 transition"
        >
          Subscribe
        </button>
      </motion.form>

      {/* Privacy Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-sm text-gray-400 text-center mt-4"
      >
        We respect your privacy. Unsubscribe anytime.
      </motion.p>
    </div>
  );
}

export default BlogC;
