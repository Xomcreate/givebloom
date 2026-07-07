import React from "react";
import { FaBullseye, FaRegLightbulb } from "react-icons/fa";

function AboutB() {
  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Our Mission & Vision
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          We believe immediate action saves lives, and structured support restores futures. GiveBloom bridges the gap between international generosity and on-the-ground earthquake crisis response.
        </p>
      </div>

      {/* Mission & Vision cards */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Mission */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col min-h-[500px]">
          <div className="relative h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_jWZD5_97ShXkA5dQRib_bUYsRcH7HkGmG3joZZ0vA&s"
              alt="Emergency First Response Mission"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <FaBullseye className="text-yellow-400 text-6xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To deploy immediate, life-saving aid directly to communities impacted by seismic disasters in Venezuela. We focus on bypassing logistical blockages to swiftly deliver clean water filtration systems, trauma medical kits, emergency food distributions, and temporary shelter systems directly into the hands of families left vulnerable by the destruction.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col min-h-[500px]">
          <div className="relative h-64">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4xyhxvMaaWka8HoBy1bGFCQURrx8eYrHeTPhC2XeUQ&s"
              alt="Community Reconstruction Vision"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <FaRegLightbulb className="text-yellow-400 text-6xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              To build an active, resilient recovery blueprint where no crisis-stricken community is left isolated. We envision a future where local Venezuelan emergency frameworks are robustly reinforced by global support, leading to structurally sound re-housing projects, restored medical facilities, and safe, thriving environments where disaster survivors can rebuild with dignity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutB;