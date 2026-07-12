import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  // Update login state based on localStorage
  const updateLoginState = () => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    setIsLoggedIn(!!token);
    setRole(userRole);
  };

  useEffect(() => {
    // Check login on mount
    updateLoginState();

    // Listen for login/logout changes
    window.addEventListener("storage", updateLoginState);
    return () => window.removeEventListener("storage", updateLoginState);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.dispatchEvent(new Event("storage")); // trigger update
    navigate("/");
  };

  return (
    <div className="hidden md:block bg-[#1a1a1a] text-white text-sm w-full px-4 sm:px-6 md:px-6 py-2">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 text-center md:text-left">

        {/* Left: Email & Phone */}
        <div className="flex flex-col sm:flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-1 md:gap-6">
          <span className="flex items-center gap-1 justify-center md:justify-start">
            <FaEnvelope className="text-yellow-400" />
            givebloom001@gmail.com
          </span>
          <span className="flex items-center gap-1 justify-center md:justify-start">
            <FaPhone className="text-yellow-400" />
           +1 (248) 759-5836
          </span>
        </div>

        {/* Right: Login / Signup OR Dashboard / Logout */}
        <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center md:justify-end gap-1 md:gap-6 mt-2 md:mt-0">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="flex items-center gap-1 justify-center md:justify-start hover:text-yellow-400 transition"
              >
                <MdLogin />
                <span>Login</span>
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-1 justify-center md:justify-start hover:text-yellow-400 transition"
              >
                <FaUser />
                <span>Sign Up</span>
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  if (role === "admin") navigate("/donatee");
                  else navigate("/user");
                }}
                className="flex items-center gap-1 justify-center md:justify-start hover:text-yellow-400 transition"
              >
                <FaUser />
                <span>Dashboard</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 justify-center md:justify-start hover:text-red-600 transition"
              >
                <span>Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;