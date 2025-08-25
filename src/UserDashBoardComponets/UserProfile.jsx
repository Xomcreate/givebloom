import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaCheck, FaUser } from "react-icons/fa";

export default function UserProfile({ initialUser } = {}) {
  const [user, setUser] = useState(
    initialUser || {
      name: "Prisca Ojimba",
      email: "prisca@example.com",
      phone: "+234 812 345 6789",
      location: "Lagos, Nigeria",
    }
  );

  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);
  const fileRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!user.name || user.name.trim().length < 3) e.name = "Enter a full name";
    if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) e.email = "Enter a valid email";
    if (!user.phone || user.phone.trim().length < 7) e.phone = "Enter a valid phone";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setIsEditing(false);
      console.log("Saved user", user, image);
    }, 700);
  };

  const handleFile = (file) => {
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer?.files?.[0];
    if (f) handleFile(f);
  };

  const onPick = (e) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  // animation variants for fields panel
  const panelVariants = {
    view: { opacity: 1, x: 0 },
    edit: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 20 },
  };

  return (
    <div className="min-h-[70vh] bg-gray-100 flex items-center justify-center p-6 no-scrollbar" style={{ overflowY: "auto" }}>
        <style>{`.no-scrollbar::-webkit-scrollbar{display:none;} .no-scrollbar{-ms-overflow-style:none; scrollbar-width:none;}`}</style>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden"
      >
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
          {/* avatar column */}
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
                title="Upload profile image"
              >
                <input id="file" ref={fileRef} type="file" accept="image/*" onChange={onPick} className="hidden" />
                <FaCamera className="text-yellow-400" />
              </label>
            </motion.div>

            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-800">{user.name}</h4>
              <p className="text-sm text-gray-500">Donor & Volunteer</p>
            </div>

            {/* REMOVED the small stats boxes as requested */}
          </div>

          {/* fields panel */}
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
                      aria-invalid={!!errors.name}
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
                      aria-invalid={!!errors.email}
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
                      aria-invalid={!!errors.phone}
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

                <div className="pt-2 border-t flex items-center justify-between">
                  <div className="text-sm text-gray-500">Tip: drag & drop an image onto your avatar or click the camera icon</div>
                  <div className="flex items-center gap-3">
                    {!isEditing ? (
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setIsEditing(true)}
                        className="px-4 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 transition"
                      >
                        Edit
                      </motion.button>
                    ) : (
                      <>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          onClick={() => { setIsEditing(false); setErrors({}); }}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
                        >
                          Cancel
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          onClick={handleSave}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 transition"
                        >
                          <FaCheck /> Save
                        </motion.button>
                      </>
                    )}
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
