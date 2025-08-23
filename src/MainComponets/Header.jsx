import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaUser,
} from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#1a1a1a] text-white text-sm w-full px-4 sm:px-6 md:px-6 py-2">
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 text-center md:text-left">

        {/* Left: Email & Phone */}
        <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-1 md:gap-6">
          <span className="flex items-center gap-1 justify-center md:justify-start">
            <FaEnvelope className="text-yellow-400" />
            Priscaojimba15@gmail.com
          </span>
          <span className="flex items-center gap-1 justify-center md:justify-start">
            <FaPhone className="text-yellow-400" />
            09076084515
          </span>
        </div>

        {/* Middle: Social Links */}
        <div className="col-span-1 flex justify-center gap-4 mt-2 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          </a>
        </div>

        {/* Right: Login & Signup */}
        <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-col md:flex-row items-center justify-center md:justify-end gap-1 md:gap-6 mt-2 md:mt-0">
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
        </div>

      </div>
    </div>
  );
}

export default Header;
