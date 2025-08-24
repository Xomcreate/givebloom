import React from "react";
import { FaUserFriends, FaUserPlus, FaHandshake } from "react-icons/fa";

function Volunteermanage() {
  const volunteers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Volunteer",
      status: "Active",
    },
    {
      id: 2,
      name: "Mary Smith",
      email: "mary@example.com",
      role: "Partner",
      status: "Pending",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h2 className="text-2xl font-bold text-yellow-400 bg-[#1a1a1a] px-4 py-2 rounded-lg shadow">
          Volunteer & Partners Management
        </h2>
        <button className="bg-yellow-400 text-[#1a1a1a] font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
          + Add Volunteer
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center">
          <FaUserFriends className="text-yellow-400 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Volunteers</h3>
            <p className="text-gray-300">120 Active</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center">
          <FaUserPlus className="text-green-400 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">New Applicants</h3>
            <p className="text-gray-300">15 Pending</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center">
          <FaHandshake className="text-blue-400 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Partners</h3>
            <p className="text-gray-300">8 Organizations</p>
          </div>
        </div>
      </div>

      {/* Volunteer Table */}
      <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Volunteer List
        </h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#2a2a2a] text-yellow-400">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((v) => (
              <tr
                key={v.id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="py-2 px-4">{v.name}</td>
                <td className="py-2 px-4">{v.email}</td>
                <td className="py-2 px-4">{v.role}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      v.status === "Active"
                        ? "bg-green-900 text-green-400"
                        : "bg-yellow-900 text-yellow-400"
                    }`}
                  >
                    {v.status}
                  </span>
                </td>
                <td className="py-2 px-4 text-center flex gap-3 justify-center">
                  <button className="text-yellow-400 hover:text-yellow-300 transition">
                    View
                  </button>
                  {v.status === "Pending" && (
                    <button className="text-green-400 hover:text-green-300 transition">
                      Approve
                    </button>
                  )}
                  <button className="text-red-400 hover:text-red-300 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="space-y-4 md:hidden mt-6">
          {volunteers.map((v) => (
            <div
              key={v.id}
              className="bg-[#2a2a2a] p-4 rounded-lg shadow-md"
            >
              <p className="font-semibold text-yellow-400">{v.name}</p>
              <p className="text-sm text-gray-300">{v.email}</p>
              <p className="text-gray-400 mt-1">{v.role}</p>
              <div className="flex justify-between items-center mt-3 text-sm">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    v.status === "Active"
                      ? "bg-green-900 text-green-400"
                      : "bg-yellow-900 text-yellow-400"
                  }`}
                >
                  {v.status}
                </span>
              </div>
              <div className="flex gap-4 mt-3">
                <button className="text-yellow-400 hover:text-yellow-300 transition">
                  View
                </button>
                {v.status === "Pending" && (
                  <button className="text-green-400 hover:text-green-300 transition">
                    Approve
                  </button>
                )}
                <button className="text-red-400 hover:text-red-300 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Volunteermanage;
