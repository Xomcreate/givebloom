import React, { useState } from "react";
import { motion } from "framer-motion";

function ForgetPassword({ setStep, setEmailProp }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const res = await fetch("https://g-bloombk.onrender.com/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage(data.message);
      setEmailProp(email);  // Pass email to next step
      setTimeout(() => setStep(2), 1500); // go to code verification
    } catch (err) {
      setError(err.message || "Error sending reset code");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-gray-50 rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-black text-center mb-3">Forgot Password</h2>
        <p className="text-black text-center mb-4">Enter your email to get a 4-digit reset code</p>

        {error && <p className="text-red-700 text-center">{error}</p>}
        {message && <p className="text-green-800 text-center">{message}</p>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl focus:outline-none border border-black"
            required
          />
          <button className="w-full py-3 bg-yellow-400 text-black rounded-xl font-bold">
            Send Code
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default ForgetPassword;
