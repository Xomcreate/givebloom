import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaCheckCircle, FaTrash } from "react-icons/fa";

const API_BASE = "https://g-bloombk.onrender.com"; // ✅ Updated live URL

function ContactManage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deletingAll, setDeletingAll] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [markingId, setMarkingId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/contact`);
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed to fetch contacts");
      setContacts(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setError("Failed to load contacts.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      setDeletingId(id);
      const res = await fetch(`${API_BASE}/api/contact/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || data.success === false) throw new Error(data.message || "Delete failed");
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete message.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleDeleteAll = async () => {
    if (!contacts.length) return;
    if (!window.confirm(`Delete ALL (${contacts.length}) messages? This cannot be undone.`)) return;
    try {
      setDeletingAll(true);
      const res = await fetch(`${API_BASE}/api/contact`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok || data.success === false) throw new Error(data.message || "Bulk delete failed");
      setContacts([]);
    } catch (err) {
      console.error("Delete all error:", err);
      alert("Failed to delete all messages.");
    } finally {
      setDeletingAll(false);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      setMarkingId(id);
      const res = await fetch(`${API_BASE}/api/contact/${id}/read`, { method: "PATCH" });
      const data = await res.json();
      if (!res.ok || !data) throw new Error("Mark as read failed");
      setContacts((prev) => prev.map((c) => (c._id === id ? { ...c, read: true } : c)));
    } catch (err) {
      console.error("Mark as read error:", err);
      alert("Failed to mark as read.");
    } finally {
      setMarkingId(null);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header and Delete All Button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-bold text-yellow-400 bg-[#1a1a1a] px-4 py-2 rounded-lg shadow">
          Contact Management
        </h1>
        <div className="flex gap-3">
          <button
            onClick={handleDeleteAll}
            disabled={!contacts.length || deletingAll}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition disabled:opacity-60 flex items-center gap-2"
          >
            <FaTrash />
            {deletingAll ? "Deleting..." : "Delete All"}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaEnvelope className="text-yellow-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Contacts</h3>
            <p className="text-gray-300">{contacts.length} Messages</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaPhoneAlt className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">New Messages</h3>
            <p className="text-gray-300">{contacts.filter((c) => !c.read).length} Unread</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaCheckCircle className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Read</h3>
            <p className="text-gray-300">{contacts.filter((c) => c.read).length} Completed</p>
          </div>
        </div>
      </div>

      {/* Contact Messages */}
      <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Contact Submissions</h3>

        {error && (
          <div className="mb-4 text-red-400">
            {error}{" "}
            <button onClick={fetchContacts} className="underline ml-2">
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : contacts.length === 0 ? (
          <p className="text-gray-400">No messages yet.</p>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2a2a2a] text-yellow-400">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Message</th>
                    <th className="p-3">Date</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c) => (
                    <tr key={c._id} className="border-t border-gray-700 hover:bg-gray-800 transition">
                      <td className="p-3">{c.firstName || ""} {c.lastName || c.name || "Anonymous"}</td>
                      <td className="p-3">{c.email}</td>
                      <td className="p-3 truncate max-w-xs">{c.message}</td>
                      <td className="p-3">{new Date(c.createdAt).toLocaleDateString()}</td>
                      <td className="p-3 text-center">
                        {c.read ? (
                          <span className="text-green-400 font-semibold text-xs">Read</span>
                        ) : (
                          <span className="text-red-400 font-semibold text-xs">Unread</span>
                        )}
                      </td>
                      <td className="p-3 text-center flex justify-center gap-2">
                        {!c.read && (
                          <button
                            onClick={() => handleMarkAsRead(c._id)}
                            disabled={markingId === c._id}
                            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-xs"
                          >
                            {markingId === c._id ? "Marking..." : "Mark as Read"}
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(c._id)}
                          disabled={deletingId === c._id}
                          className="text-red-400 hover:text-red-300 transition inline-flex items-center gap-1 disabled:opacity-60 text-xs"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 md:hidden">
              {contacts.map((c) => (
                <div key={c._id} className="bg-[#2a2a2a] p-4 rounded-lg shadow-md">
                  <p className="font-semibold text-yellow-400">{c.firstName || ""} {c.lastName || c.name || "Anonymous"}</p>
                  <p className="text-sm text-gray-300">{c.email}</p>
                  <p className="text-gray-400 mt-2">{c.message}</p>
                  <div className="flex justify-between items-center mt-3 text-sm">
                    <span>{new Date(c.createdAt).toLocaleDateString()}</span>
                    <div className="flex gap-2">
                      {!c.read && (
                        <button
                          onClick={() => handleMarkAsRead(c._id)}
                          disabled={markingId === c._id}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-xs"
                        >
                          {markingId === c._id ? "Marking..." : "Mark as Read"}
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(c._id)}
                        disabled={deletingId === c._id}
                        className="text-red-400 hover:text-red-300 transition inline-flex items-center gap-1 disabled:opacity-60 text-xs"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1">
                    {c.read ? (
                      <span className="text-green-400 font-semibold text-xs">Read</span>
                    ) : (
                      <span className="text-red-400 font-semibold text-xs">Unread</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactManage;
