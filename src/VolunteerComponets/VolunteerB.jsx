import React from 'react';
import { FaRegSmile, FaHandsHelping, FaGlobe } from 'react-icons/fa';

function VolunteerB() {
  const stats = [
    { icon: <FaHandsHelping size={40} className="text-yellow-400" />, title: "100+ Volunteers", description: "Passionate people making a difference every day." },
    { icon: <FaGlobe size={40} className="text-yellow-400" />, title: "50+ Partners", description: "Organizations collaborating to create real impact." },
    { icon: <FaRegSmile size={40} className="text-yellow-400" />, title: "Thousands of Lives", description: "Lives touched through our programs and initiatives." },
  ];

  return (
    <div className="w-full bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800">
          Why Join Our Volunteers & Partners
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Volunteering and partnering with us means you contribute to meaningful projects, help communities thrive, and be part of a global network dedicated to positive change.
        </p>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition"
            >
              {item.icon}
              <h3 className="text-xl md:text-2xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VolunteerB;
