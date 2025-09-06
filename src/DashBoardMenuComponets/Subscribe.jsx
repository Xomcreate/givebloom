import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

const API_BASE = "https://g-bloombk.onrender.com/api";

function Subscribe() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSubscribers = async () => {
    try {
      const res = await axios.get(`${API_BASE}/subscribers`);
      setSubscribers(res.data);
    } catch (err) {
      console.error("Error fetching subscribers:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchSubscribers(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this subscriber?")) return;
    try {
      await axios.delete(`${API_BASE}/subscribers/${id}`);
      setSubscribers(subscribers.filter((sub) => sub._id !== id));
    } catch (err) {
      console.error("Error deleting subscriber:", err);
    }
  };

  if (loading) return <p className="text-center mt-8 text-white">Loading...</p>;

  return (
    <div className="p-4 md:p-6 text-gray-900">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">Subscribers</h1>
      </div>
      <div className="overflow-x-auto bg-[#1a1a1a] text-white shadow rounded-lg">
        <table className="w-full text-sm md:text-base border-collapse">
          <thead className="bg-[#2a2a2a] text-yellow-400 text-left">
            <tr>
              <th className="p-3">Email</th>
              <th className="p-3 hidden sm:table-cell">Date Subscribed</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub) => (
              <tr key={sub._id} className="border-t border-gray-700 hover:bg-gray-800 transition">
                <td className="p-3">{sub.email}</td>
                <td className="p-3 hidden sm:table-cell">{new Date(sub.date).toLocaleDateString()}</td>
                <td className="p-3 text-center">
                  <button onClick={() => handleDelete(sub._id)} className="text-red-400 hover:text-red-300 transition">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            {subscribers.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-400">No subscribers yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Subscribe;
