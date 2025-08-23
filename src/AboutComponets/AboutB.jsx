import React from "react";
import missionImg from "../assets/too.jpg"; // replace with your mission image
import visionImg from "../assets/kid.jpg"; // replace with your vision image
import { FaBullseye, FaRegLightbulb } from "react-icons/fa";

function AboutB() {
  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
          Our Mission & Vision
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We believe compassion is the seed of transformation. Every act of giving 
          creates waves of hope—restoring dignity, rebuilding lives, and uplifting 
          communities in need.
        </p>
      </div>

      {/* Mission & Vision cards */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Mission */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col h-[500px]">
          <div className="relative h-64">
            <img
              src={missionImg}
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <FaBullseye className="text-yellow-400 text-6xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To stand with the vulnerable and bring relief to those in need—whether 
              it’s food for the hungry, shelter for the homeless, or hope for the hopeless.  
              Our mission is to transform struggle into strength and despair into 
              opportunities for a better tomorrow.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition flex flex-col h-[500px]">
          <div className="relative h-64">
            <img
              src={visionImg}
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <FaRegLightbulb className="text-yellow-400 text-6xl" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Our Vision
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              A world where no one is forgotten, where compassion replaces neglect,  
              and where generosity builds bridges of opportunity. Our vision is to 
              see thriving communities where dignity is restored and every person 
              has the chance to live with purpose and hope.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutB;
