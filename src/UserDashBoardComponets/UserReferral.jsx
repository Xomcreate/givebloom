import React from "react";
import { FaCopy, FaUsers, FaGift } from "react-icons/fa";

function UserReferral() {
  const referralLink = "https://givebloom.vercel.app/";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Title */}
      <div className="bg-white shadow rounded-xl p-6 mb-6 border-l-4 border-yellow-400">
        <h2 className="text-2xl font-bold text-gray-800">Referral Program</h2>
        <p className="text-gray-500">Invite friends and earn rewards 🎉</p>
      </div>

      {/* Referral Link Box */}
      <div className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between">
        <p className="text-gray-700 break-all">{referralLink}</p>
        <button
          onClick={handleCopy}
          className="ml-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg flex items-center hover:bg-yellow-300 transition"
        >
          <FaCopy className="mr-2" /> Copy
        </button>
      </div>

      {/* Referral Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
          <FaUsers className="text-3xl text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-gray-800">15</h3>
          <p className="text-gray-500">Total Referrals</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
          <FaUsers className="text-3xl text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-gray-800">10</h3>
          <p className="text-gray-500">Successful Referrals</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center">
          <FaGift className="text-3xl text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-gray-800">₦5,000</h3>
          <p className="text-gray-500">Rewards Earned</p>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Top Referrers</h3>
        <ul className="text-gray-700 space-y-3">
          <li className="flex justify-between">
            <span>John Doe</span> <span className="font-semibold">25</span>
          </li>
          <li className="flex justify-between">
            <span>Mary Jane</span> <span className="font-semibold">18</span>
          </li>
          <li className="flex justify-between">
            <span>Chris Paul</span> <span className="font-semibold">12</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserReferral;
