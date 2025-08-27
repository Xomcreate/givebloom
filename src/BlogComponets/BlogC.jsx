import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";
import axios from "axios";

function BlogC() {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // success or error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post("http://localhost:5000/api/subscribe", { email });
      setMessage({ type: "success", text: res.data.message });
      setEmail("");
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

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
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-gray-300 text-lg leading-relaxed">
          Join the <span className="text-yellow-400 font-semibold">GiveBloom-</span>
          community to get the latest updates, inspiring stories, and ways you can make an impact.  
        </p>
      </motion.div>

      {/* Subscribe Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 rounded-lg bg-yellow-400 text-[#1a1a1a] font-semibold hover:bg-yellow-300 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Subscribe"}
        </button>
      </motion.form>

      {/* Feedback Message */}
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center mt-4 text-sm ${
            message.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message.text}
        </motion.p>
      )}

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
