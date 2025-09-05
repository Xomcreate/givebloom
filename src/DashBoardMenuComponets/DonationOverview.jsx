import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

function DonationOverview() {
  const [stats, setStats] = useState({
    totalDonations: 0,
    thisMonth: 0,
    donors: 0,
    pendingPayouts: 0,
  });

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDonations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/donations");
      const donationData = res.data;

      const totalDonations = donationData.reduce((sum, d) => sum + Number(d.amount), 0);
      const now = new Date();
      const thisMonth = donationData
        .filter(
          d =>
            new Date(d.createdAt).getMonth() === now.getMonth() &&
            new Date(d.createdAt).getFullYear() === now.getFullYear()
        )
        .reduce((sum, d) => sum + Number(d.amount), 0);
      const donors = donationData.length;
      const pendingPayouts = donationData
        .filter(d => d.status === "Pending")
        .reduce((sum, d) => sum + Number(d.amount), 0);

      setStats({ totalDonations, thisMonth, donors, pendingPayouts });

      const formattedDonations = donationData
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(d => ({
          _id: d._id,
          donor: d.name,
          cause: d.cause || "General",
          amount: Number(d.amount),
          amountText: `₦${Number(d.amount).toLocaleString()}`,
          method:
            d.paymentMethod === "mobile"
              ? "Mobile Money"
              : d.paymentMethod.charAt(0).toUpperCase() + d.paymentMethod.slice(1),
          date: new Date(d.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
          status: d.status,
          color: d.status === "Completed" ? "text-green-400" : "text-yellow-400",
        }));

      setDonations(formattedDonations);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch donations:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleDelete = async id => {
    if (!window.confirm("Are you sure you want to delete this donation?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/donations/${id}`);
      fetchDonations();
    } catch (err) {
      console.error(err);
      alert("Failed to delete donation");
    }
  };

  // --------- Approve a Pending Donation ---------
  const handleApprove = async id => {
    if (!window.confirm("Approve this donation?")) return;
    try {
      await axios.put(`http://localhost:5000/api/donations/approve/${id}`);
      fetchDonations();
    } catch (err) {
      console.error(err);
      alert("Failed to approve donation");
    }
  };

  if (loading) return <p className="text-center text-gray-500 mt-6">Loading donations...</p>;

  const chartData = {
    labels: donations.slice().reverse().map(d => d.cause),
    datasets: [
      {
        label: "Donation Amount (₦)",
        data: donations.slice().reverse().map(d => d.amount),
        backgroundColor: donations.slice().reverse().map(() => "rgba(245, 158, 11, 0.6)"),
        borderColor: donations.slice().reverse().map(() => "rgba(245, 158, 11, 1)"),
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { position: "bottom" }, title: { display: true, text: "Donation Trends" } },
    maintainAspectRatio: false,
    animation: { animateRotate: true, animateScale: true, duration: 1500, easing: "easeOutBounce" },
  };

  return (
    <div className="text-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Donation Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Total Donations</h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">
            ₦{Number(stats.totalDonations).toLocaleString()}
          </p>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">This Month</h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">
            ₦{Number(stats.thisMonth).toLocaleString()}
          </p>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Donors</h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">{stats.donors}</p>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">Pending Payouts</h2>
          <p className="text-2xl md:text-3xl font-bold text-yellow-400 mt-2">
            ₦{Number(stats.pendingPayouts).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Recent Donations Table */}
      <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Donations</h2>
        <div className="hidden md:block">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700 text-yellow-400">
                <th className="py-2 px-2">Donor</th>
                <th className="py-2 px-2">Cause</th>
                <th className="py-2 px-2">Amount</th>
                <th className="py-2 px-2">Method</th>
                <th className="py-2 px-2">Date</th>
                <th className="py-2 px-2">Status</th>
                <th className="py-2 px-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td className="py-2 px-2">{d.donor}</td>
                  <td className="py-2 px-2">{d.cause}</td>
                  <td className="py-2 px-2 text-yellow-400 font-semibold">{d.amountText}</td>
                  <td className="py-2 px-2">{d.method}</td>
                  <td className="py-2 px-2">{d.date}</td>
                  <td className={`py-2 px-2 ${d.color}`}>{d.status}</td>
                  <td className="py-2 px-2 space-x-2">
                    {d.status === "Pending" && (
                      <button
                        className="bg-green-600 text-white px-2 py-1 rounded"
                        onClick={() => handleApprove(d._id)}
                      >
                        Approve
                      </button>
                    )}
                    <button
                      className="bg-red-600 text-white px-2 py-1 rounded"
                      onClick={() => handleDelete(d._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Donation Pie Chart */}
      <div
        className="bg-[#1a1a1a] text-white shadow rounded-lg p-6"
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <h2 className="text-lg font-semibold mb-4">Donation Trends</h2>
        <div className="h-64">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default DonationOverview;
