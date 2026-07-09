import React, { useEffect, useState } from "react";
import { FaUsers, FaUserCheck, FaUserClock, FaTrash } from "react-icons/fa";
import axios from "axios";

function UserManage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://g-bloombk-production.up.railway.app/api/auth/users");
      setUsers(res.data.users);
    } catch (err) {
      console.error("Error fetching users:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/auth/users/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Delete error:", err.message);
    }
  };

  if (loading) return <p className="p-6 text-yellow-400">Loading users...</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-yellow-400 bg-[#1a1a1a] px-4 py-2 rounded-lg shadow mb-6">
        User Management
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaUsers className="text-yellow-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-gray-300">{users.length}</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaUserCheck className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Active Users</h3>
            <p className="text-gray-300">{users.filter(u => u.status === "Active").length}</p>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 flex items-center gap-4">
          <FaUserClock className="text-blue-400 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold">Logged In Today</h3>
            <p className="text-gray-300">{users.filter(u => u.loggedInToday).length}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1a1a] text-white shadow-md rounded-xl p-6 overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4 text-yellow-400">Registered Users</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#2a2a2a] text-yellow-400">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-t border-gray-700 hover:bg-gray-800 transition">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{user.fullName}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">
                  <button onClick={() => handleDelete(user._id)} className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserManage;
