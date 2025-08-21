import React, { useState } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Causes", path: "/causes" },
    { name: "Gallery", path: "/gallery" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black w-full shadow-md">
      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-8 items-center px-6 h-[10vh]">
        {/* Left: Logo */}
        <div className="col-span-2 flex items-center justify-center gap-2">
          <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full">
            <FaHandsHelping className="text-black text-lg" />
          </div>
          <h1 className="text-2xl font-bold text-white">GiveBloom</h1>
        </div>

        {/* Center: Menu */}
        <div className="col-span-4 flex justify-center gap-8 text-white text-lg font-semibold">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="cursor-pointer hover:text-yellow-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Donate Button */}
        <div className="col-span-2 flex justify-center">
          <Link
            to="/donate"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-500 transition text-lg"
          >
            Donate
            <div className="bg-white text-black px-1.5 py-0.5 rounded-full text-sm">
              ↗
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 h-[10vh]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full">
            <FaHandsHelping className="text-black text-lg" />
          </div>
          <h1 className="text-xl font-bold text-white">GiveBloom</h1>
        </div>

        {/* Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <HiX className="w-7 h-7 text-yellow-400" />
          ) : (
            <HiMenu className="w-7 h-7 text-yellow-400" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-4 py-4">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="cursor-pointer hover:text-yellow-400 transition text-lg font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/donate"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-500 transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            Donate
            <div className="bg-white text-black px-1.5 py-0.5 rounded-full text-sm">
              ↗
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
