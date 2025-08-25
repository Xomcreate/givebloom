import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaCalendarAlt, FaClock } from "react-icons/fa";
import { MdHistory } from "react-icons/md";

function UserVolunteer() {
  const activities = [
    { id: 1, date: "Aug 20, 2025", event: "Clean Water Project", hours: "4h", status: "Completed" },
    { id: 2, date: "Aug 05, 2025", event: "Food Distribution", hours: "3h", status: "Completed" },
    { id: 3, date: "Jul 25, 2025", event: "Medical Outreach", hours: "5h", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between border-l-4 border-yellow-400"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Your Volunteering 💛</h2>
          <p className="text-gray-500">Track your service and contributions</p>
        </div>
        <FaHandsHelping className="text-5xl text-yellow-400" />
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-xl p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500">Total Hours</p>
            <h3 className="text-2xl font-bold text-gray-800">120h</h3>
          </div>
          <FaClock className="text-3xl text-yellow-400" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-xl p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500">Events Joined</p>
            <h3 className="text-2xl font-bold text-gray-800">12</h3>
          </div>
          <FaCalendarAlt className="text-3xl text-yellow-400" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-xl p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500">This Month</p>
            <h3 className="text-2xl font-bold text-gray-800">15h</h3>
          </div>
          <FaHandsHelping className="text-3xl text-yellow-400" />
        </motion.div>
      </div>

      {/* Volunteering History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow rounded-xl p-6"
      >
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <MdHistory className="text-yellow-400" /> Activity History
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600">
              <th className="p-3">Date</th>
              <th className="p-3">Event</th>
              <th className="p-3">Hours</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((act) => (
              <tr key={act.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{act.date}</td>
                <td className="p-3">{act.event}</td>
                <td className="p-3 font-semibold text-gray-800">{act.hours}</td>
                <td className="p-3 text-green-600 font-semibold">{act.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default UserVolunteer;
