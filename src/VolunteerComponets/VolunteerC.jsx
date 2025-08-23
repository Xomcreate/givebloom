import React from 'react';
import volunteer1 from '../assets/boy.jpg'; // placeholder image
import volunteer2 from '../assets/girl.jpg';
import volunteer3 from '../assets/ka.jpg';

function VolunteerC() {
  const volunteers = [
    { image: volunteer1, name: 'Grace Oladipo', role: 'Volunteer Coordinator', description: 'Passionate about helping communities and making an impact.' },
    { image: volunteer2, name: 'Emmanuel Okeke', role: 'Community Volunteer', description: 'Dedicated to improving lives through consistent support.' },
    { image: volunteer3, name: 'Aisha Bello', role: 'Event Organizer', description: 'Bringing people together to create meaningful change.' },
  ];

  return (
    <div className="w-full bg-black py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center text-white space-y-8">
        <h2 className="text-2xl md:text-3xl font-extrabold">
          Meet Our Volunteers & Partners
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Even if our volunteers are just starting, you can see the faces and roles that make our mission possible. Join us and be part of this community.
        </p>

        {/* Volunteer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {volunteers.map((vol, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-4 flex flex-col items-center text-center hover:scale-105 transition"
            >
              <img
                src={vol.image}
                alt={vol.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1 text-black">{vol.name}</h3>
              <p className="text-yellow-400 font-semibold mb-2">{vol.role}</p>
              <p className="text-gray-700 text-sm">{vol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VolunteerC;
