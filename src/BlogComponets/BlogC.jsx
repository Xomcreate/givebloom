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
      await axios.post("https://g-bloombk.onrender.com/api/subscribe", { email });
      setMessage({ type: "success", text: "Alerts activated. You will receive immediate field updates." });
      setEmail("");
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Something went wrong! Please try again.",
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
          Get Live Field Dispatches & Crisis Alerts
        </h2>
        <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
          Stay directly connected to the ground operations. Subscribe to receive immediate deployment alerts, emergency situation reports, and transparent impact summaries regarding the earthquake relief efforts in Venezuela.
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
          placeholder="Enter your emergency email contact"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-600 bg-[#2a2a2a] text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 rounded-lg bg-yellow-400 text-[#1a1a1a] font-semibold hover:bg-yellow-300 transition whitespace-nowrap ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Activating Alerts..." : "Activate Alerts"}
        </button>
      </motion.form>

      {/* Feedback Message */}
      {message && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center mt-4 text-sm font-medium ${
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
        Your context remains confidential. Opt-out of operational dispatches at any time.
      </motion.p>
    </div>
  );
}

export default BlogC;