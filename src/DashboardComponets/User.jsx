// src/pages/User.jsx
import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaDonate,
  FaHandsHelping,
  FaUser,
  FaEnvelope,
  FaRegCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";
import UserProfile from "../UserDashBoardComponets/UserProfile";
import UserDash from "../UserDashBoardComponets/UserDash";
import UserDonate from "../UserDashBoardComponets/UserDonate";
import UserVolunteer from "../UserDashBoardComponets/UserVolunteer";
import UserBagdes from "../UserDashBoardComponets/UserBagdes";
import UserReferral from "../UserDashBoardComponets/UserReferral";



function User() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, key: "dashboard" },
    { name: "Profile", icon: <FaDonate />, key: "profile" },
    { name: "My Donations", icon: <FaHandsHelping />, key: "mydonations" },
    { name: "Volunteering", icon: <FaHandsHelping />, key: "volunteering" },
     { name: "Achievement", icon: <FaHandsHelping />, key: "achievement" },
        { name: "Referral", icon: <FaHandsHelping />, key: "ref" },
  
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top NavBar */}
      <nav className="bg-[#1a1a1a] text-white flex flex-col md:flex-row items-center justify-between px-4 py-3 shadow-md">
        <div className="text-lg font-bold mb-2 md:mb-0">User Dashboard</div>

        <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`cursor-pointer transition rounded-md 
                ${
                  activeTab === item.key
                    ? "bg-yellow-500 text-black"
                    : "hover:bg-gray-700"
                }
                flex flex-col items-center text-xs px-2 py-1 md:flex-row md:items-center md:gap-2 md:text-sm
              `}
              onClick={() => setActiveTab(item.key)}
            >
              <span className="text-base md:text-lg">{item.icon}</span>
              <span className="mt-1 md:mt-0">{item.name}</span>
            </li>
          ))}

          {/* Logout */}
          <li
            className="flex flex-col items-center text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-red-600 md:flex-row md:items-center md:gap-2 md:text-sm"
            onClick={() => alert("Logging out...")}
          >
            <FaSignOutAlt className="text-base md:text-lg" />
            <span className="mt-1 md:mt-0">Logout</span>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "dashboard" && <UserDash/>}
        {activeTab === "profile" && <UserProfile/>}
        {activeTab === "mydonations" && <UserDonate />}
        {activeTab === "volunteering" && <UserVolunteer />}
        {activeTab === "achievement" && <UserBagdes />}
          {activeTab === "ref" && <UserReferral />}
     
      </main>
    </div>
  );
}

export default User;
