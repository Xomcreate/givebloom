import React from "react";
import { FaEnvelope, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

function ContactManage() {
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "I’d like to volunteer for the outreach program.",
      status: "Pending",
      date: "2025-08-22",
    },
    {
      id: 2,
      name: "Mary Smith",
      email: "mary@example.com",
      message: "Do you accept food donations?",
      status: "Resolved",
      date: "2025-08-20",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-bold text-yellow-400 bg-[#1a1a1a] px-4 py-2 rounded-lg shadow">
          Contact Management
        </h1>
        <button className="bg-yellow-400 text-[#1a1a1a] font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
          + Add Contact
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaEnvelope className="text-yellow-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Contacts</h3>
            <p className="text-gray-300">120 Messages</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaPhoneAlt className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">New Messages</h3>
            <p className="text-gray-300">15 Unread</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaCheckCircle className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Resolved</h3>
            <p className="text-gray-300">80 Completed</p>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Contact Submissions
        </h3>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2a2a2a] text-yellow-400">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Message</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className="border-t border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="p-3">{contact.name}</td>
                  <td className="p-3">{contact.email}</td>
                  <td className="p-3 truncate max-w-xs">{contact.message}</td>
                  <td className="p-3">{contact.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contact.status === "Resolved"
                          ? "bg-green-900 text-green-400"
                          : "bg-yellow-900 text-yellow-400"
                      }`}
                    >
                      {contact.status}
                    </span>
                  </td>
                  <td className="p-3 text-center flex gap-3 justify-center">
                    <button className="text-yellow-400 hover:text-yellow-300 transition">
                      View
                    </button>
                    <button className="text-green-400 hover:text-green-300 transition">
                      Resolve
                    </button>
                    <button className="text-red-400 hover:text-red-300 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-4 md:hidden">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-[#2a2a2a] p-4 rounded-lg shadow-md"
            >
              <p className="font-semibold text-yellow-400">{contact.name}</p>
              <p className="text-sm text-gray-300">{contact.email}</p>
              <p className="text-gray-400 mt-2">{contact.message}</p>
              <div className="flex justify-between items-center mt-3 text-sm">
                <span>{contact.date}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    contact.status === "Resolved"
                      ? "bg-green-900 text-green-400"
                      : "bg-yellow-900 text-yellow-400"
                  }`}
                >
                  {contact.status}
                </span>
              </div>
              <div className="flex gap-4 mt-3">
                <button className="text-yellow-400 hover:text-yellow-300 transition">
                  View
                </button>
                <button className="text-green-400 hover:text-green-300 transition">
                  Resolve
                </button>
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

export default ContactManage;
