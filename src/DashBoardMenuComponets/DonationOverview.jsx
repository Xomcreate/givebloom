// src/DashBoardMenuComponets/DonationOverview.jsx
import React from "react";

function DonationOverview() {
  const stats = [
    { title: "Total Donations", value: "₦1,250,000" },
    { title: "This Month", value: "₦250,000" },
    { title: "Donors", value: "350" },
    { title: "Pending Payouts", value: "₦75,000" },
  ];

  const donations = [
    { donor: "John Doe", amount: "₦20,000", method: "Bank Transfer", date: "Aug 20, 2025", status: "Completed", color: "text-green-400" },
    { donor: "Jane Smith", amount: "₦50,000", method: "Card", date: "Aug 18, 2025", status: "Pending", color: "text-yellow-400" },
    { donor: "Michael Lee", amount: "₦10,000", method: "USSD", date: "Aug 15, 2025", status: "Completed", color: "text-green-400" },
  ];

  return (
    <div className="text-gray-900">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-[#1a1a1a]">
        Donation Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Donations */}
      <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Donations</h2>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700 text-yellow-400">
                <th className="py-2 px-2">Donor</th>
                <th className="py-2 px-2">Amount</th>
                <th className="py-2 px-2">Method</th>
                <th className="py-2 px-2">Date</th>
                <th className="py-2 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td className="py-2 px-2">{donation.donor}</td>
                  <td className="py-2 px-2 text-yellow-400 font-semibold">{donation.amount}</td>
                  <td className="py-2 px-2">{donation.method}</td>
                  <td className="py-2 px-2">{donation.date}</td>
                  <td className={`py-2 px-2 ${donation.color}`}>{donation.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="space-y-4 md:hidden">
          {donations.map((donation, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4 shadow">
              <p className="font-semibold">{donation.donor}</p>
              <p className="text-yellow-400">{donation.amount}</p>
              <p className="text-sm text-gray-400">{donation.method}</p>
              <p className="text-sm text-gray-400">{donation.date}</p>
              <p className={`font-medium ${donation.color}`}>{donation.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Trends (Chart Placeholder) */}
      <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Donation Trends</h2>
        <div className="h-40 flex items-center justify-center text-gray-400">
          📊 Chart will go here
        </div>
      </div>
    </div>
  );
}

export default DonationOverview;
