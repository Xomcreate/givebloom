import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [index, setIndex] = useState(0);

  // donors for carousel
  const donors = [
    { name: "Adaora K.", quote: "Your kindness fuels our mission every day.", img: "https://i.pravatar.cc/51" },
    { name: "Emeka O.", quote: "Giving brings hope to those in need.", img: "https://i.pravatar.cc/52" },
    { name: "Fatima L.", quote: "Together, we create a brighter tomorrow.", img: "https://i.pravatar.cc/53" },
    { name: "David U.", quote: "Every act of kindness counts.", img: "https://i.pravatar.cc/54" },
    { name: "Ngozi P.", quote: "Compassion is the foundation of change.", img: "https://i.pravatar.cc/55" },
  ];

  // auto swipe every 3s
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % donors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !pwd) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // TODO: hook to your login API
    console.log("Login user…");
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
        {/* Left side - branding */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-black text-white md:w-1/2 p-10 flex flex-col items-center justify-center text-center relative"
        >
          <h2 className="text-3xl font-extrabold tracking-tight">Welcome Back</h2>
          <p className="text-lg mt-3">
            Sign in to <span className="text-yellow-400">continue giving</span>.
          </p>
          <p className="text-gray-300 mt-3 max-w-md">
            Access your account, track your impact, and stay connected with
            GiveBloom.
          </p>

          {/* Carousel */}
          <div className="bg-gray-50 text-gray-800 rounded-xl shadow-md p-4 mt-8 w-full max-w-sm h-32 overflow-hidden relative">
            {donors.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={i === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col justify-center items-center px-4"
              >
                <p className="text-sm text-center">“{d.quote}”</p>
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-10 h-10 rounded-full"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <p className="font-semibold leading-tight">{d.name}</p>
                    <p className="text-xs text-gray-500">GiveBloom Donor</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side - form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="md:w-1/2 p-8"
        >
          <h3 className="text-2xl font-bold text-center">Sign In</h3>
          <p className="text-gray-600 text-center mb-6">
            Enter your details to access GiveBloom.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
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

            {/* Password */}
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
                aria-label="Toggle password visibility"
              >
                {showPwd ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-yellow-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-red-600 text-center"
              >
                {error}
              </motion.p>
            )}

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Login
            </motion.button>

            {/* OR divider */}
            <div className="flex items-center my-2">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            {/* Google */}
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-50 transition"
            >
              <FcGoogle className="text-xl" />
              <span className="font-medium">Sign in with Google</span>
            </motion.button>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Don’t have an account?{" "}
              <Link to="/register" className="text-yellow-500 font-semibold">
                Sign Up
              </Link>
            </p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;
