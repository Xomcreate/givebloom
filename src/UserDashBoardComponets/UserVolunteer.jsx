import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaCalendarAlt, FaClock } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import axios from "axios";

function UserVolunteer() {
  const [volunteer, setVolunteer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) return;

    const fetchVolunteer = async () => {
      try {
        const res = await axios.get(`https://g-bloombk.onrender.com/api/volunteers/me/${email}`);
        setVolunteer(res.data);
      } catch (err) {
        console.error("Error fetching volunteer profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteer();
  }, []);

  if (loading) return <p className="p-6">Loading dashboard...</p>;
  if (!volunteer) return <p className="p-6 text-red-500">Volunteer profile not found.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow rounded-xl p-6 mb-6 flex items-center justify-between border-l-4 border-yellow-400"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {volunteer.name} 💛
          </h2>
          <p className="text-gray-500">
            Status:{" "}
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                volunteer.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {volunteer.status || "Pending"}
            </span>
          </p>
        </div>
        <FaHandsHelping className="text-5xl text-yellow-400" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div whileHover={{ scale: 1.03 }} className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Interest</p>
            <h3 className="text-2xl font-bold text-gray-800">{volunteer.interest}</h3>
          </div>
          <FaCalendarAlt className="text-3xl text-yellow-400" />
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Joined On</p>
            <h3 className="text-2xl font-bold text-gray-800">
              {new Date(volunteer.createdAt).toLocaleDateString()}
            </h3>
          </div>
          <FaClock className="text-3xl text-yellow-400" />
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }} className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
          <div>
            <p className="text-gray-500">Email</p>
            <h3 className="text-md font-bold text-gray-800">{volunteer.email}</h3>
          </div>
          <FaHandsHelping className="text-3xl text-yellow-400" />
        </motion.div>
      </div>

      {volunteer.message && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="bg-white shadow rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <MdHistory className="text-yellow-400" /> Your Message
          </h3>
          <p className="text-gray-600">{volunteer.message}</p>
        </motion.div>
      )}
    </div>
  );
}

export default UserVolunteer;
