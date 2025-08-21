import React from "react";
import heroImage from "../assets/call.jpg"; // replace with your image path
import { FaHandsHelping } from "react-icons/fa";

function ContactA() {
  return (
    <div
      className="w-full h-[60vh] md:h-[80vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative text-center text-white px-4 md:px-8">
        <FaHandsHelping className="mx-auto text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4 text-yellow-400" />
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          We’d Love to Hear From You!
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">
          Reach out to us for support, donations, or any questions. Your contribution makes a difference!
        </p>
        <button className="bg-yellow-400 text-black font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 rounded-md hover:bg-yellow-500 transition text-sm sm:text-base md:text-lg">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default ContactA;
