import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaHandsHelping } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  // scroll to top after navigation
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white">
      {/* SVG Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.79,22.3,103.74,29,158,17.39C230,49,284,13,339,3.17,400-7.29,460,13,520,29.32c56,15,112,20,168,8.71,59-12.14,113-41.31,172-48.3C944,2.13,1000,12,1057,26.67c54,13.89,113,30.36,143,40.32V0Z"
            className="fill-gray-50"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20 py-16 grid md:grid-cols-4 gap-12 text-center md:text-left">
        {/* Logo + About */}
        <div className="col-span-1 space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full">
              <FaHandsHelping className="text-black text-lg" />
            </div>
            <h1 className="text-2xl font-bold">GiveBloom</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Empowering communities through kindness. Your generosity brings
            hope, joy, and transformation to lives in need.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={() => handleNavigate("/")} className="hover:text-yellow-400 transition">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/about")} className="hover:text-yellow-400 transition">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/blog")} className="hover:text-yellow-400 transition">
                Blog
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/contact")} className="hover:text-yellow-400 transition">
                Contact
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/privacy")} className="hover:text-yellow-400 transition">
                Privacy Policy
              </button>
            </li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button onClick={() => handleNavigate("/donate")} className="hover:text-yellow-400 transition">
                Donate
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/volunteer")} className="hover:text-yellow-400 transition">
                Volunteer
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/partner")} className="hover:text-yellow-400 transition">
                Partner
              </button>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Xomcodes. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
