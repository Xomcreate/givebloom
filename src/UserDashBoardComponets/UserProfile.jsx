import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaCheck, FaUser } from "react-icons/fa";
import axios from "axios";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const fileRef = useRef(null);

  const token = localStorage.getItem("token"); // JWT token stored after login

  // Fetch logged-in user on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("https://g-bloombk.onrender.com/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const u = res.data.user;
        setUser({
          id: u._id,
          name: u.fullName,
          email: u.email,
          phone: u.phone || "",
          location: u.location || "",
          avatar: u.avatar || null,
        });
        setImage(u.avatar || null);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    if (token) fetchUser();
  }, [token]);

  // Validate input fields
  const validate = () => {
    const e = {};
    if (!user.name || user.name.trim().length < 3) e.name = "Enter a full name";
    if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) e.email = "Enter a valid email";
    if (!user.phone || user.phone.trim().length < 7) e.phone = "Enter a valid phone";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Save updated profile
  const handleSave = async () => {
    if (!validate()) return;
    setSaving(true);

    try {
      const res = await axios.put(
        `https://g-bloombk.onrender.com/api/auth/users/${user.id}`,
        {
          fullName: user.name,
          email: user.email,
          phone: user.phone,
          location: user.location,
          avatar: image, // currently as preview URL; for real upload, backend handling needed
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const u = res.data.user;
      setUser({
        ...user,
        name: u.fullName,
        email: u.email,
        phone: u.phone,
        location: u.location,
        avatar: u.avatar,
      });

      setSaving(false);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating user:", err);
      setSaving(false);
    }
  };

  const handleFile = (file) => {
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer?.files?.[0]);
  };

  const onPick = (e) => {
    handleFile(e.target.files?.[0]);
  };

  if (!user) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-[70vh] bg-gray-100 flex items-center justify-center p-6 no-scrollbar" style={{ overflowY: "auto" }}>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Profile</h3>
            <p className="text-sm text-gray-500">Manage your account details and picture</p>
          </div>

          <div className="flex items-center gap-3">
            {!isEditing ? (
              <motion.button
                whileHover={{ scale: 1.03 }}
                onClick={() => setIsEditing(true)}
                className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-sm hover:bg-yellow-500 transition"
              >
                Edit profile
              </motion.button>
            ) : (
              <div className="flex items-center gap-2">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  disabled={saving}
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-sm hover:bg-yellow-500 transition disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save"}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => { setIsEditing(false); setErrors({}); }}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
          {/* Avatar */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <motion.div
              onDragOver={(e) => e.preventDefault()}
              onDrop={onDrop}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 shadow">
                {image ? (
                  <motion.img
                    src={image}
                    alt="profile"
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.98 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-400">
                    <FaUser size={48} />
                  </div>
                )}
              </div>

              <label
                htmlFor="file"
                className="absolute -bottom-2 right-0 bg-white border border-gray-200 rounded-full p-2 shadow cursor-pointer hover:scale-105 transform transition"
              >
                <input id="file" ref={fileRef} type="file" accept="image/*" onChange={onPick} className="hidden" />
                <FaCamera className="text-yellow-400" />
              </label>
            </motion.div>

            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-800">{user.name}</h4>
              <p className="text-sm text-gray-500">Donor & Volunteer</p>
            </div>
          </div>

          {/* Fields */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={isEditing ? 'edit' : 'view'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">Full name</label>
                    <motion.input
                      layout
                      className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none ${errors.name ? 'border-red-300' : 'border-gray-200'}`}
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                      disabled={!isEditing}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600">Email address</label>
                    <motion.input
                      layout
                      className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none ${errors.email ? 'border-red-300' : 'border-gray-200'}`}
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      disabled={!isEditing}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600">Phone</label>
                    <motion.input
                      layout
                      className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none ${errors.phone ? 'border-red-300' : 'border-gray-200'}`}
                      value={user.phone}
                      onChange={(e) => setUser({ ...user, phone: e.target.value })}
                      disabled={!isEditing}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600">Location</label>
                    <motion.input
                      layout
                      className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none border-gray-200"
                      value={user.location}
                      onChange={(e) => setUser({ ...user, location: e.target.value })}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
