import React, { useState, useEffect } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");      // ✅ NEW
  const [location, setLocation] = useState(""); // ✅ NEW
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pwd !== pwd2) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    try {
      const res = await axios.post("https://g-bloombk.onrender.com/api/auth/register", {
        fullName,
        email,
        phone,      // ✅ send phone
        location,   // ✅ send location
        password: pwd,
      });

      setSuccess("Registration successful!");
      setError("");

      setFullName("");
      setEmail("");
      setPhone("");     // ✅ clear after success
      setLocation("");  // ✅ clear after success
      setPwd("");
      setPwd2("");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      setSuccess("");
    }
  };

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row"
      >
        {/* Left */}
        <div className="bg-black text-white md:w-1/2 p-10 flex flex-col items-center justify-center text-center relative">
          <h2 className="text-3xl font-extrabold tracking-tight">GiveBloom</h2>
          <p className="text-lg mt-3">
            Join us to <span className="text-yellow-400">make an impact</span>.
          </p>
          <p className="text-gray-300 mt-3 max-w-md">
            Be part of a community bringing hope, joy, and real change through giving.
          </p>
        </div>

        {/* Right */}
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-bold text-center">Create Account</h3>
          <p className="text-gray-600 text-center mb-6">Start making an impact with GiveBloom.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* ✅ Phone */}
            <div>
              <label className="block text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* ✅ Location */}
            <div>
              <label className="block text-sm mb-2">Location</label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-2">Password</label>
              <input
                type={showPwd ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPwd ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            <div className="relative">
              <label className="block text-sm mb-2">Confirm Password</label>
              <input
                type={showPwd2 ? "text" : "password"}
                placeholder="Re-enter your password"
                className="w-full border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={pwd2}
                onChange={(e) => setPwd2(e.target.value)}
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPwd2((v) => !v)}
                className="absolute right-3 top-9 text-gray-500"
              >
                {showPwd2 ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            {success && <p className="text-sm text-green-600 text-center">{success}</p>}
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Sign Up
            </button>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-yellow-500 font-semibold">Sign In</Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
