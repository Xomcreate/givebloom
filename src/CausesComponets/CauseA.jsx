import React from "react";
import causesImage from "../assets/box.jpg"; // replace with your hero image
import { FaBook, FaHeartbeat, FaWater, FaUtensils } from "react-icons/fa";

function CauseA() {
  const causes = [
    { title: "Education for All", icon: <FaBook className="text-yellow-400 w-10 h-10" /> },
    { title: "Healthcare Support", icon: <FaHeartbeat className="text-yellow-400 w-10 h-10" /> },
    { title: "Clean Water Projects", icon: <FaWater className="text-yellow-400 w-10 h-10" /> },
    { title: "Food & Shelter", icon: <FaUtensils className="text-yellow-400 w-10 h-10" /> },
  ];

  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${causesImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-12 max-w-4xl space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          Join Us in Changing Lives
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200">
          Every cause we support brings hope and opportunity. Your contribution ensures education,
          healthcare, and safe living for those in need.
        </p>

        {/* ✅ Changed from button → anchor tag */}
        <a
          href="#causeb"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-yellow-500 transition text-sm sm:text-base md:text-lg shadow-md inline-block"
        >
          Support a Cause
        </a>

        {/* Cause Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {causes.map((cause, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg hover:scale-105 transition transform w-36"
            >
              {cause.icon}
              <h3 className="mt-2 font-semibold text-lg">{cause.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CauseA;
