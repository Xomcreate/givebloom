import React from "react";
import { FaHeartbeat, FaWater, FaUtensils, FaHome } from "react-icons/fa";

function CauseA() {
  const causes = [
    { title: "Medical Support", icon: <FaHeartbeat className="text-yellow-400 w-10 h-10" /> },
    { title: "Clean Water", icon: <FaWater className="text-yellow-400 w-10 h-10" /> },
    { title: "Food Supplies", icon: <FaUtensils className="text-yellow-400 w-10 h-10" /> },
    { title: "Crisis Shelter", icon: <FaHome className="text-yellow-400 w-10 h-10" /> },
  ];

  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxagLUii5RZj5DpF9Rj0jTuCOZf2AiXragWkDVvH4hUg&s=10)` }} // updated path
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-12 max-w-4xl space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
          Urgent Funding Allocations
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200">
          Every response pillar is deployed directly into affected zones in Venezuela. Your contribution 
          ensures trauma kits, safe purification units, nutrition grids, and temporary housing operations reach families immediately.
        </p>

        {/* Anchor tag navigation to details */}
        <a
          href="#causeb"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-yellow-500 transition text-sm sm:text-base md:text-lg shadow-md inline-block"
        >
          Review Relief Sectors
        </a>

        {/* Cause Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {causes.map((cause, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md p-5 rounded-xl shadow-lg hover:scale-105 transition transform w-36"
            >
              {cause.icon}
              <h3 className="mt-2 font-semibold text-sm sm:text-base leading-tight">{cause.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CauseA;