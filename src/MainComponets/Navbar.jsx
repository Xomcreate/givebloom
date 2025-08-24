import React, { useState, useEffect } from "react";
import { FaHandsHelping, FaUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { MdLogin } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`transition-all duration-300 ${
        scrolled
          ? "fixed top-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-black/70 backdrop-blur-md rounded-xl z-50"
          : "w-full bg-black"
      }`}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-8 items-center px-6 h-[10vh]">
        {/* Left: Logo */}
        <div className="col-span-2 flex items-center justify-center gap-2">
          <div className="bg-yellow-400 w-10 h-10 flex items-center justify-center rounded-full">
            <FaHandsHelping className="text-black text-lg" />
          </div>
          {/* Blooming font style */}
          <h1 className="text-3xl font-serif italic tracking-wide text-white">
            GiveBloom
          </h1>
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
          <h1 className="text-xl font-serif italic tracking-wide text-white">
            GiveBloom
          </h1>
        </div>

        {/* Centered Login + Signup icons */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="p-2 text-white hover:text-yellow-400 transition"
          >
            <MdLogin className="text-2xl" />
          </Link>
          <Link
            to="/signup"
            className="p-2 text-white hover:text-yellow-400 transition"
          >
            <FaUser className="text-xl" />
          </Link>
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
      <div
        className={`md:hidden bg-black text-white flex flex-col items-center gap-4 overflow-hidden transition-[max-height] duration-500 ease-out ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="cursor-pointer hover:text-yellow-400 transition text-lg font-semibold"
          >
            {item.name}
          </Link>
        ))}
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
    </nav>
  );
}

export default Navbar;
