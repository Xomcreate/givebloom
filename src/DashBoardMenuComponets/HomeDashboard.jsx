import React, { useEffect, useState } from "react";

// Guarded API base to avoid "process is not defined"
const API_BASE =
  (typeof process !== "undefined" && process.env && process.env.REACT_APP_API_BASE) ||
  (typeof window !== "undefined" && window.REACT_APP_API_BASE) ||
  "http://localhost:5000";

function HomeDashboard() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/contact`);
      const text = await res.text();
      let data;
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        console.error("Non-JSON response for contacts:", text);
        throw new Error("Invalid server response");
      }
      if (!res.ok || !data.success) {
        throw new Error(data.message || `Failed to fetch contacts (status ${res.status})`);
      }

      // Only set unread messages
      const allContacts = Array.isArray(data.data) ? data.data : [];
      const unreadOnly = allContacts.filter(c => !c.read); // filter unread messages
      setContacts(unreadOnly);

    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const unreadMessages = contacts.length;

  return (
    <div className="text-gray-900">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Donations</h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">₦120,000</p>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Donors</h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">58</p>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Messages</h2>
          {loading ? (
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">...</p>
          ) : error ? (
            <p className="text-red-400 mt-2">{error}</p>
          ) : (
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">
              {unreadMessages}
            </p>
          )}
          <p className="text-sm text-gray-300 mt-1">Unread</p>
        </div>
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
                <th className="py-2 px-2">Date</th>
                <th className="py-2 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-2 px-2">John Doe</td>
                <td className="py-2 px-2 text-yellow-400 font-semibold">₦50,000</td>
                <td className="py-2 px-2">Aug 21, 2025</td>
                <td className="py-2 px-2 text-green-400">Completed</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 px-2">Jane Smith</td>
                <td className="py-2 px-2 text-yellow-400 font-semibold">₦20,000</td>
                <td className="py-2 px-2">Aug 20, 2025</td>
                <td className="py-2 px-2 text-yellow-400">Pending</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Michael Lee</td>
                <td className="py-2 px-2 text-yellow-400 font-semibold">₦10,000</td>
                <td className="py-2 px-2">Aug 19, 2025</td>
                <td className="py-2 px-2 text-green-400">Completed</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="space-y-4 md:hidden">
          {[{ donor: "John Doe", amount: "₦50,000", date: "Aug 21, 2025", status: "Completed", statusColor: "text-green-400" },
            { donor: "Jane Smith", amount: "₦20,000", date: "Aug 20, 2025", status: "Pending", statusColor: "text-yellow-400" },
            { donor: "Michael Lee", amount: "₦10,000", date: "Aug 19, 2025", status: "Completed", statusColor: "text-green-400" }].map((donation, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 shadow">
              <p className="font-semibold">{donation.donor}</p>
              <p className="text-yellow-400">{donation.amount}</p>
              <p className="text-sm text-gray-400">{donation.date}</p>
              <p className={`font-medium ${donation.statusColor}`}>{donation.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder for Chart */}
      <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Donation Trends</h2>
        <div className="h-40 flex items-center justify-center text-gray-400">📊 Chart will go here</div>
      </div>
    </div>
  );
}

export default HomeDashboard;
