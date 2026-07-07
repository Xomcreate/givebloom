import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutA() {
  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Lazy-loaded background image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavRpx1XG_DQYhURvDJmunjFbEbTDjb7mG6sP9NsPcHQ&s=10" // Consider swapping this out for an image of emergency response later!
        alt="Venezuela Earthquake Relief"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-12 max-w-3xl">
        <FaHeart className="mx-auto text-yellow-400 text-4xl sm:text-5xl md:text-6xl mb-4 drop-shadow-lg" />
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-4">
          Stand With Venezuela in Times of Crisis
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
          In the wake of devastating seismic destruction, every moment counts. 
          GiveBloom is on the ground coordinating critical supplies, safe drinking water, 
          and medical care to help families rebuild their lives from the rubble.
        </p>

        <Link
          to="/donate"
          className="bg-yellow-400 text-black font-semibold px-5 py-3 sm:px-6 sm:py-3 rounded-md hover:bg-yellow-500 transition text-sm sm:text-base md:text-lg shadow-md inline-block"
        >
          Support the Relief Efforts
        </Link>
      </div>
    </div>
  );
}

export default AboutA;