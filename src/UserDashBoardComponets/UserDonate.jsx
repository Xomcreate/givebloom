import React from "react";
import { motion } from "framer-motion";
import { FaDonate, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";

function UserDonate() {
  const donations = [
    { id: 1, date: "Aug 10, 2025", cause: "Education", amount: "₦20,000", status: "Successful" },
    { id: 2, date: "Jul 15, 2025", cause: "Food Drive", amount: "₦10,000", status: "Successful" },
    { id: 3, date: "Jun 30, 2025", cause: "Medical Outreach", amount: "₦5,000", status: "Successful" },
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
          <h2 className="text-2xl font-bold text-gray-800">Your Donations 💛</h2>
          <p className="text-gray-500">Track your contributions and impact</p>
        </div>
        <FaDonate className="text-5xl text-yellow-400" />
      </motion.div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-xl p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500">Total Donated</p>
            <h3 className="text-2xl font-bold text-gray-800">₦35,000</h3>
          </div>
          <FaDonate className="text-3xl text-yellow-400" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-xl p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500">This Month</p>
            <h3 className="text-2xl font-bold text-gray-800">₦20,000</h3>
          </div>
          <FaCalendarAlt className="text-3xl text-yellow-400" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow rounded-xl p-6 flex items-center justify-between"
        >
          <div>
            <p className="text-gray-500">Successful Donations</p>
            <h3 className="text-2xl font-bold text-gray-800">3</h3>
          </div>
          <FaCheckCircle className="text-3xl text-yellow-400" />
        </motion.div>
      </div>

      {/* Donation History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow rounded-xl p-6"
      >
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
            {donations.map((donation) => (
              <tr key={donation.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{donation.date}</td>
                <td className="p-3">{donation.cause}</td>
                <td className="p-3 font-semibold text-gray-800">{donation.amount}</td>
                <td className="p-3 text-green-600 font-semibold">{donation.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default UserDonate;
