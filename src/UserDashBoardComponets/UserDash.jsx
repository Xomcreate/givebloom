import React, { useEffect, useState } from "react";
import { FaUserCircle, FaDonate, FaCalendarAlt } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import axios from "axios";

function UserDash() {
  const [userName, setUserName] = useState("");
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalDonated: 0, thisMonth: 0, successful: 0 });

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const name = localStorage.getItem("userName") || "User";
    setUserName(name);
  }, []);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        if (!userEmail) {
          setLoading(false);
          return;
        }

        const res = await axios.get(`https://g-bloombk-production.up.railway.app/api/donations/user/${userEmail}`);
        const userDonations = res.data;

        const totalDonated = userDonations.reduce((sum, d) => sum + Number(d.amount), 0);
        const now = new Date();
        const thisMonth = userDonations
          .filter(d => {
            const date = new Date(d.createdAt);
            return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
          })
          .reduce((sum, d) => sum + Number(d.amount), 0);
        const successful = userDonations.filter(d => d.status === "Completed").length;

        setDonations(
          userDonations.map((d, idx) => ({
            id: idx + 1,
            date: new Date(d.createdAt).toLocaleDateString(),
            cause: d.cause || "General", // updated here
            amount: `₦${Number(d.amount).toLocaleString()}`,
            status: d.status === "Completed" ? "Successful" : d.status,
          }))
        );

        setStats({ totalDonated, thisMonth, successful });
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch donations:", err);
        setLoading(false);
      }
    };

    fetchDonations();
  }, [userEmail]);

  if (loading) return <p className="text-center text-gray-500 mt-6">Loading donations...</p>;
  if (!userEmail) return <p className="text-center text-gray-500 mt-6">Log in to see your donations.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between border-l-4 border-yellow-400">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, {userName} 👋</h2>
          <p className="text-gray-500">Here’s an overview of your impact</p>
        </div>
        <FaUserCircle className="text-5xl text-yellow-400" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Total Donated</p>
            <h3 className="text-2xl font-bold text-gray-800">₦{Number(stats.totalDonated).toLocaleString()}</h3>
          </div>
          <FaDonate className="text-3xl text-yellow-400" />
        </div>

        <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">This Month</p>
            <h3 className="text-2xl font-bold text-gray-800">₦{Number(stats.thisMonth).toLocaleString()}</h3>
          </div>
          <FaCalendarAlt className="text-3xl text-yellow-400" />
        </div>

        <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Successful Donations</p>
            <h3 className="text-2xl font-bold text-gray-800">{stats.successful}</h3>
          </div>
          <FaDonate className="text-3xl text-yellow-400" />
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
            {donations.length > 0 ? (
              donations.map(d => (
                <tr key={d.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{d.date}</td>
                  <td className="p-3">{d.cause}</td>
                  <td className="p-3 font-semibold text-gray-800">{d.amount}</td>
                  <td className="p-3 text-green-600 font-semibold">{d.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">No donations yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDash;
