import React from "react";
import { FaUsers, FaUserCheck, FaUserClock } from "react-icons/fa";

function UserManage() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Mary Smith", email: "mary@example.com", status: "Inactive" },
    { id: 3, name: "James Brown", email: "james@example.com", status: "Active" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-bold text-yellow-400 bg-[#1a1a1a] px-4 py-2 rounded-lg shadow">
          User Management
        </h1>
        <button className="bg-yellow-400 text-[#1a1a1a] font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
          + Add User
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaUsers className="text-yellow-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-gray-300">320</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaUserCheck className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-gray-300">280</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaUserClock className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Logged In Today</h3>
            <p className="text-gray-300">150</p>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Registered Users
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#2a2a2a] text-yellow-400">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === "Active"
                        ? "bg-green-900 text-green-400"
                        : "bg-red-900 text-red-400"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="space-y-4 md:hidden mt-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-[#2a2a2a] p-4 rounded-lg shadow-md"
            >
              <p className="font-semibold text-yellow-400">{user.name}</p>
              <p className="text-sm text-gray-300">{user.email}</p>
              <div className="flex justify-between items-center mt-3 text-sm">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-900 text-green-400"
                      : "bg-red-900 text-red-400"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserManage;
