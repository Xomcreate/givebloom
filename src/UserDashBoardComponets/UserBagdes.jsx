import React from "react";
import { FaHandsHelping, FaMedal, FaStar, FaDonate } from "react-icons/fa";

function UserBadges() {
  const badges = [
    {
      name: "Volunteering",
      icon: <FaHandsHelping className="text-yellow-400 text-3xl" />,
      description: "Awarded for completing 5 volunteering events.",
    },
    {
      name: "Top Donor",
      icon: <FaDonate className="text-yellow-400 text-3xl" />,
      description: "Recognized for donating consistently this year.",
    },
    {
      name: "Excellence",
      icon: <FaMedal className="text-yellow-400 text-3xl" />,
      description: "Earned for showing leadership in campaigns.",
    },
    {
      name: "Star Supporter",
      icon: <FaStar className="text-yellow-400 text-3xl" />,
      description: "Achieved for outstanding contributions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between border-l-4 border-yellow-400">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Your Achievements 🏆</h2>
          <p className="text-gray-500">Here are the badges you’ve earned</p>
        </div>
      </div>

      {/* Badge Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition"
          >
            {badge.icon}
            <div>
              <h3 className="text-lg font-bold text-gray-800">{badge.name}</h3>
              <p className="text-gray-500 text-sm">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserBadges;
