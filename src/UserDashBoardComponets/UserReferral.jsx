import React, { useEffect, useState } from "react";
import { FaCopy, FaUsers, FaGift } from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://g-bloombk-production.up.railway.app";

function UserReferral() {
  const [data, setData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [meRes, leaderboardRes] = await Promise.all([
          fetch(`${API_BASE}/api/referrals/me`, {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }),
          fetch(`${API_BASE}/api/referrals/leaderboard`, {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }),
        ]);

        if (!meRes.ok) throw new Error("Failed to load your referral stats");
        if (!leaderboardRes.ok) throw new Error("Failed to load leaderboard");

        const meData = await meRes.json();
        const leaderboardData = await leaderboardRes.json();

        setData(meData);
        setLeaderboard(leaderboardData.leaderboard || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCopy = () => {
    if (!data?.referralLink) return;
    navigator.clipboard.writeText(data.referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <p className="text-gray-500">Loading your referral stats...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <div className="bg-white shadow rounded-xl p-6 mb-6 border-l-4 border-yellow-400">
        <h2 className="text-2xl font-bold text-gray-800">Referral Program</h2>
        <p className="text-gray-500">Invite friends and earn rewards 🎉</p>
      </div>

      {/* Referral Link Box */}
      <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between flex-wrap gap-3">
        <p className="text-gray-700 break-all">{data?.referralLink}</p>
        <button
          onClick={handleCopy}
          className="ml-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg flex items-center hover:bg-yellow-300 transition"
        >
          <FaCopy className="mr-2" /> {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
          <FaUsers className="text-3xl text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-gray-800">{data?.totalReferrals ?? 0}</h3>
          <p className="text-gray-500">Total Referrals</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
          <FaUsers className="text-3xl text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-gray-800">{data?.successfulReferrals ?? 0}</h3>
          <p className="text-gray-500">Successful Referrals</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
          <FaGift className="text-3xl text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-gray-800">Coming soon</h3>
          <p className="text-gray-500">Rewards Earned</p>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Top Referrers</h3>
        {leaderboard.length === 0 ? (
          <p className="text-gray-500">No referrals yet — be the first!</p>
        ) : (
          <ul className="text-gray-700 space-y-3">
            {leaderboard.map((entry) => (
              <li key={entry.userId} className="flex justify-between">
                <span>{entry.fullName}</span>
                <span className="font-semibold">{entry.successfulCount}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UserReferral;