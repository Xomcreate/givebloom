import React from "react";
import { motion } from "framer-motion";

function ForgetPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Forgot Password
        </h2>
        <p className="mt-2 text-gray-500 text-center text-sm">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        {/* Form */}
        <form className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-xl font-semibold shadow-md hover:bg-gray-800 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to login */}
        <div className="mt-6 text-center">
          <a
            href="/login"
            className="text-sm text-gray-600 hover:text-black font-medium"
          >
            Back to Login
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default ForgetPassword;
