import React from "react";
import { FaUserCircle, FaDonate, FaHandsHelping, FaCalendarAlt } from "react-icons/fa";
import { MdHistory } from "react-icons/md";

function UserDash() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Welcome / Profile Section */}
      <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between border-l-4 border-yellow-400">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, Prisca 👋</h2>
          <p className="text-gray-500">Here’s an overview of your impact</p>
        </div>
        <FaUserCircle className="text-5xl text-yellow-400" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Donations</p>
            <h3 className="text-2xl font-bold text-gray-800">₦120,000</h3>
          </div>
          <FaDonate className="text-3xl text-yellow-400" />
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Causes Supported</p>
            <h3 className="text-2xl font-bold text-gray-800">5</h3>
          </div>
          <FaHandsHelping className="text-3xl text-yellow-400" />
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Active Plan</p>
            <h3 className="text-2xl font-bold text-gray-800">Monthly</h3>
          </div>
          <FaCalendarAlt className="text-3xl text-yellow-400" />
        </div>
      </div>

      {/* Donation History */}
      <div className="bg-white shadow rounded-xl p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MdHistory className="text-yellow-400" /> Donation History
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="p-3">Date</th>
              <th className="p-3">Cause</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">Aug 10, 2025</td>
              <td className="p-3">Education</td>
              <td className="p-3">₦20,000</td>
              <td className="p-3 text-green-600 font-semibold">Successful</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">Jul 05, 2025</td>
              <td className="p-3">Food Drive</td>
              <td className="p-3">₦15,000</td>
              <td className="p-3 text-green-600 font-semibold">Successful</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Impact / Upcoming Campaigns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Impact Stories */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Your Impact</h3>
          <p className="text-gray-600 mb-2">
            Your donations helped provide meals for 200 children last month 🍲
          </p>
          <p className="text-gray-600">
            You also contributed to school supplies for 50 students 📚
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Campaigns</h3>
          <ul className="text-gray-600 space-y-3">
            <li>🌍 Clean Water Project – Sept 15, 2025</li>
            <li>🏥 Free Medical Outreach – Oct 05, 2025</li>
            <li>🎄 Holiday Charity Drive – Dec 20, 2025</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserDash;
