import React, { useState, useEffect } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [showPwd, setShowPwd] = useState(false);
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const donors = [
    { name: "Carlos M.", quote: "Knowing my support delivers clean water keeps me going.", img: "https://i.pravatar.cc/51" },
    { name: "Elena R.", quote: "Every emergency medical kit sent brings hope to families.", img: "https://i.pravatar.cc/52" },
    { name: "Sofia V.", quote: "Standing with Venezuela means saving lives in real-time.", img: "https://i.pravatar.cc/53" },
    { name: "Mateo S.", quote: "Even the smallest act of solidarity counts right now.", img: "https://i.pravatar.cc/54" },
    { name: "Gabriela L.", quote: "Compassion is our strongest response to crisis.", img: "https://i.pravatar.cc/55" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % donors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [donors.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !pwd) {
      setError("Please enter both email and password.");
      setSuccess("");
      return;
    }
    setError("");

    try {
      const res = await axios.post("https://g-bloombk.onrender.com/api/auth/login", {
        email,
        password: pwd,
      });

      const { token, user } = res.data;

      // Store token and user info
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);
      localStorage.setItem("userName", user.fullName);
      localStorage.setItem("userEmail", user.email);

      window.dispatchEvent(new Event("storage"));

      setSuccess("Login successful!");
      setError("");

      // --- Check if user is a volunteer ---
      let isVolunteer = false;
      try {
        const volRes = await axios.get(`http://localhost:5000/api/volunteers/me/${user.email}`);
        if (volRes.data) isVolunteer = true;
      } catch (err) {
        isVolunteer = false;
      }

      setTimeout(() => {
        if (user.role === "admin") navigate("/donatee");
        else if (isVolunteer) navigate("/user");
        else navigate("/user");
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <motion.div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left side with quotes */}
        <div className="bg-black text-white md:w-1/2 p-10 flex flex-col items-center justify-center text-center relative">
          <h2 className="text-3xl font-extrabold tracking-tight">Welcome Back</h2>
          <p className="text-lg mt-3">
            Sign in to <span className="text-yellow-400">continue giving</span>.
          </p>
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
                  <img src={d.img} alt={d.name} className="w-10 h-10 rounded-full" />
                  <div className="text-left">
                    <p className="font-semibold leading-tight">{d.name}</p>
                    <p className="text-xs text-gray-500">Relief Donor</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right side login form */}
        <div className="md:w-1/2 p-8">
          <h3 className="text-2xl font-bold text-center">Sign In</h3>
          <p className="text-gray-600 text-center mb-6">Enter your details to access your account.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <button type="button" onClick={() => setShowPwd((v) => !v)} className="absolute right-3 top-9 text-gray-500">
                {showPwd ? <HiEyeOff /> : <HiEye />}
              </button>
            </div>

            {success && <p className="text-sm text-green-600 text-center">{success}</p>}
            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            <button type="submit" className="w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Login
            </button>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-yellow-500 font-semibold">Sign Up</Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;