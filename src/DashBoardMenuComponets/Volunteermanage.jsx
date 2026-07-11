import React, { useEffect, useState } from "react";
import { FaUserFriends, FaUserPlus, FaHandshake, FaTimes } from "react-icons/fa";
import axios from "axios";

const API_BASE = "https://g-bloombk.onrender.com/api/volunteers";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  interest: "Volunteer",
  message: "",
};

function Volunteermanage() {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add Volunteer modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // Fetch volunteers from backend
  const fetchVolunteers = async () => {
    try {
      const res = await axios.get(API_BASE);
      setVolunteers(res.data);
    } catch (err) {
      console.error("Error fetching volunteers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  // Approve volunteer
  const handleApprove = async (id) => {
    try {
      const res = await axios.put(`https://g-bloombk-production.up.railway.app/api/volunteers/${id}/approve`);
      setVolunteers((prev) =>
        prev.map((v) => (v._id === id ? res.data : v))
      );
    } catch (err) {
      console.error("Error approving volunteer:", err);
    }
  };

  // Delete volunteer
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setVolunteers((prev) => prev.filter((v) => v._id !== id));
    } catch (err) {
      console.error("Error deleting volunteer:", err);
    }
  };

  // Delete ALL volunteers
  const handleDeleteAll = async () => {
    if (
      !window.confirm(
        "This will permanently delete ALL volunteer records. This cannot be undone. Are you sure?"
      )
    )
      return;

    if (!window.confirm("Really delete EVERYONE? This is your final confirmation.")) return;

    try {
      await axios.delete(`${API_BASE}/all`);
      setVolunteers([]);
    } catch (err) {
      console.error("Error deleting all volunteers:", err);
      alert("Failed to delete all volunteers");
    }
  };

  // ---- Add Volunteer modal handlers ----
  const openAddModal = () => {
    setForm(initialForm);
    setFormError("");
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    if (submitting) return; // don't close mid-submit
    setShowAddModal(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddVolunteer = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.name || !form.email || !form.phone || !form.interest) {
      setFormError("Name, email, phone, and interest are required.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await axios.post(API_BASE, form);
      setVolunteers((prev) => [res.data, ...prev]);
      setShowAddModal(false);
      setForm(initialForm);
    } catch (err) {
      console.error("Error adding volunteer:", err);
      setFormError(err.response?.data?.error || "Failed to add volunteer. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h2 className="text-2xl font-bold text-yellow-400 bg-[#1a1a1a] px-4 py-2 rounded-lg shadow">
          Volunteer & Partners Management
        </h2>
        <div className="flex gap-3">
          {volunteers.length > 0 && (
            <button
              onClick={handleDeleteAll}
              className="bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded-lg shadow transition"
            >
              Delete All
            </button>
          )}
          <button
            onClick={openAddModal}
            className="bg-yellow-400 text-[#1a1a1a] font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition"
          >
            + Add Volunteer
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center">
          <FaUserFriends className="text-yellow-400 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Total Volunteers</h3>
            <p className="text-gray-300">{volunteers.length} Registered</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center">
          <FaUserPlus className="text-green-400 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">New Applicants</h3>
            <p className="text-gray-300">
              {volunteers.filter((v) => !v.status || v.status === "Pending").length} Pending
            </p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center">
          <FaHandshake className="text-blue-400 text-3xl mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Partners</h3>
            <p className="text-gray-300">
              {volunteers.filter((v) => v.interest === "Partner").length} Organizations
            </p>
          </div>
        </div>
      </div>

      {/* Volunteer Table */}
      <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">
          Volunteer List
        </h3>

        {loading ? (
          <p className="text-gray-400">Loading volunteers...</p>
        ) : volunteers.length === 0 ? (
          <p className="text-gray-400">No volunteers found.</p>
        ) : (
          <>
            {/* Desktop Table */}
            <table className="w-full text-left border-collapse hidden md:table">
              <thead>
                <tr className="bg-[#2a2a2a] text-yellow-400">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Phone</th>
                  <th className="py-2 px-4">Interest</th>
                  <th className="py-2 px-4">Status</th>
                  <th className="py-2 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map((v) => (
                  <tr
                    key={v._id}
                    className="border-t border-gray-700 hover:bg-gray-800 transition"
                  >
                    <td className="py-2 px-4">{v.name}</td>
                    <td className="py-2 px-4">{v.email}</td>
                    <td className="py-2 px-4">{v.phone}</td>
                    <td className="py-2 px-4">{v.interest}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          v.status === "Active"
                            ? "bg-green-900 text-green-400"
                            : "bg-yellow-900 text-yellow-400"
                        }`}
                      >
                        {v.status || "Pending"}
                      </span>
                    </td>
                    <td className="py-2 px-4 text-center flex gap-3 justify-center">
                      {(!v.status || v.status === "Pending") && (
                        <button
                          onClick={() => handleApprove(v._id)}
                          className="text-green-400 hover:text-green-300 transition"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(v._id)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
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
                  key={v._id}
                  className="bg-[#2a2a2a] p-4 rounded-lg shadow-md"
                >
                  <p className="font-semibold text-yellow-400">{v.name}</p>
                  <p className="text-sm text-gray-300">{v.email}</p>
                  <p className="text-sm text-gray-300">{v.phone}</p>
                  <p className="text-gray-400 mt-1">{v.interest}</p>
                  <div className="flex justify-between items-center mt-3 text-sm">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        v.status === "Active"
                          ? "bg-green-900 text-green-400"
                          : "bg-yellow-900 text-yellow-400"
                      }`}
                    >
                      {v.status || "Pending"}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-3">
                    {(!v.status || v.status === "Pending") && (
                      <button
                        onClick={() => handleApprove(v._id)}
                        className="text-green-400 hover:text-green-300 transition"
                      >
                        Approve
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(v._id)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Add Volunteer Modal */}
      {showAddModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={closeAddModal}
        >
          <div
            className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeAddModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
              type="button"
            >
              <FaTimes size={18} />
            </button>

            <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">Add Volunteer</h3>

            {formError && (
              <p className="text-red-600 text-sm mb-3 bg-red-50 border border-red-200 rounded px-3 py-2">
                {formError}
              </p>
            )}

            <form onSubmit={handleAddVolunteer} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="+234 800 000 0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Interest</label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                >
                  <option value="Volunteer">Volunteer</option>
                  <option value="Partner">Partner</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
                  placeholder="Anything you'd like us to know..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeAddModal}
                  className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50 transition"
                  disabled={submitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-yellow-400 text-[#1a1a1a] py-2 rounded-lg font-semibold hover:bg-yellow-500 transition disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? "Adding..." : "Add Volunteer"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Volunteermanage;