import React, { useState } from "react";
import { FaTachometerAlt, FaBlog, FaImages, FaDonate, FaHandsHelping, FaUsers, FaEnvelope, FaRegCommentDots, FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import HomeDashboard from "../DashBoardMenuComponets/HomeDashboard";
import BlogManage from "../DashBoardMenuComponets/BlogManage";
import ManageGallery from "../DashBoardMenuComponets/ManageGallery";
import DonationOverview from "../DashBoardMenuComponets/DonationOverview";
import Volunteermanage from "../DashBoardMenuComponets/Volunteermanage";
import UserManage from "../DashBoardMenuComponets/UserManage";
import ContactManage from "../DashBoardMenuComponets/ContactManage";
import ReviewManage from "../DashBoardMenuComponets/ReviewManage";
import Subscribe from "../DashBoardMenuComponets/Subscribe";

function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, key: "dashboard" },
    { name: "Blog", icon: <FaBlog />, key: "blog" },
    { name: "Gallery", icon: <FaImages />, key: "gallery" },
    { name: "Donations", icon: <FaDonate />, key: "donations" },
    { name: "Volunteers", icon: <FaHandsHelping />, key: "volunteers" },
    { name: "Users", icon: <FaUsers />, key: "users" },
    { name: "Contacts", icon: <FaEnvelope />, key: "contacts" },
    { name: "Reviews", icon: <FaRegCommentDots />, key: "reviews" },
    { name: "Subscription", icon: <FaBell />, key: "subscribe" }, 
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top NavBar */}
      <nav className="bg-[#1a1a1a] text-white flex flex-col md:flex-row items-center justify-between px-4 py-3 shadow-md">
        <div className="text-lg font-bold mb-2 md:mb-0">Admin Panel</div>

        <ul className="flex flex-wrap justify-center gap-3 md:gap-6">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`cursor-pointer transition rounded-md 
                ${activeTab === item.key ? "bg-yellow-500 text-black" : "hover:bg-gray-700"}
                flex flex-col items-center text-xs px-2 py-1 md:flex-row md:items-center md:gap-2 md:text-sm`}
              onClick={() => setActiveTab(item.key)}
            >
              <span className="text-base md:text-lg">{item.icon}</span>
              <span className="mt-1 md:mt-0">{item.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "dashboard" && <HomeDashboard />}
        {activeTab === "blog" && <BlogManage />}
        {activeTab === "gallery" && <ManageGallery />}
        {activeTab === "donations" && <DonationOverview />}
        {activeTab === "volunteers" && <Volunteermanage />}
        {activeTab === "users" && <UserManage />}
        {activeTab === "contacts" && <ContactManage />}
        {activeTab === "reviews" && <ReviewManage />}
        {activeTab === "subscribe" && <Subscribe />}
      </main>
    </div>
  );
}

export default Admin;
