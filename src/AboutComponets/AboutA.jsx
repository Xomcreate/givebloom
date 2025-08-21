import React from "react";
import splashImage from "../assets/coin.jpg"; // replace with your splash image
import { FaHeart } from "react-icons/fa";

function AboutA() {
  return (
    <div
      className="relative w-full h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${splashImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-12 max-w-3xl">
        <FaHeart className="mx-auto text-yellow-400 text-4xl sm:text-5xl md:text-6xl mb-4 drop-shadow-lg" />
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug mb-4">
          Be the Reason Someone Smiles Today
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
          Every donation tells a story of compassion. We believe no child should 
          be left behind. With your support, we provide food, education, and 
          brighter futures for families in need.
        </p>

        <button className="bg-yellow-400 text-black font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-md hover:bg-yellow-500 transition text-sm sm:text-base md:text-lg shadow-md">
          Join Our Mission
        </button>
      </div>
    </div>
  );
}

export default AboutA;
