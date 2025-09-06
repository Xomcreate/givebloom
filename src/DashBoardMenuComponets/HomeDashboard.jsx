import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// ✅ Live backend URL
const API_BASE = "https://g-bloombk.onrender.com";

function HomeDashboard() {
  const [contacts, setContacts] = useState([]);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch contacts
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

      const allContacts = Array.isArray(data.data) ? data.data : [];
      const unreadOnly = allContacts.filter(c => !c.read);
      setContacts(unreadOnly);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  // Fetch donations
  const fetchDonations = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/donations`);
      setDonations(res.data || []);
    } catch (err) {
      console.error("Error fetching donations:", err);
    }
  };

  useEffect(() => {
    fetchContacts();
    fetchDonations();
  }, []);

  const unreadMessages = contacts.length;
  const totalDonations = donations.reduce((sum, d) => sum + Number(d.amount), 0);
  const totalDonors = donations.length;

  const recentDonations = donations
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  // Pie chart data for Donation Trends
  const chartData = {
    labels: recentDonations.map(d => d.name),
    datasets: [
      {
        data: recentDonations.map(d => Number(d.amount)),
        backgroundColor: recentDonations.map(() => "rgba(245, 158, 11, 0.6)"), // yellow-400
        borderColor: recentDonations.map(() => "rgba(245, 158, 11, 1)"),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "Donation Trends" },
    },
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 1500,
      easing: "easeOutBounce",
    },
  };

  return (
    <div className="text-gray-900">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Dashboard Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Donations</h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">
            ₦{Number(totalDonations).toLocaleString()}
          </p>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Donors</h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">{totalDonors}</p>
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
              {recentDonations.map((d, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td className="py-2 px-2">{d.name}</td>
                  <td className="py-2 px-2 text-yellow-400 font-semibold">₦{Number(d.amount).toLocaleString()}</td>
                  <td className="py-2 px-2">{new Date(d.createdAt).toLocaleDateString()}</td>
                  <td className={`py-2 px-2 ${d.status === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
                    {d.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="space-y-4 md:hidden">
          {recentDonations.map((d, idx) => (
            <div key={idx} className="bg-gray-800 rounded-lg p-4 shadow">
              <p className="font-semibold">{d.name}</p>
              <p className="text-yellow-400">₦{Number(d.amount).toLocaleString()}</p>
              <p className="text-sm text-gray-400">{new Date(d.createdAt).toLocaleDateString()}</p>
              <p className={`font-medium ${d.status === "Completed" ? "text-green-400" : "text-yellow-400"}`}>
                {d.status}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Trends Pie Chart */}
      <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Donation Trends</h2>
        <div className="h-40">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
