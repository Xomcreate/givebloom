import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "https://g-bloombk.onrender.com/api";

function ManageGallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    caption: "",
    isPublic: true,
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${API_BASE}/gallery`);
      setGalleryItems(res.data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return alert("Please select an image.");

    const data = new FormData();
    data.append("title", formData.title);
    data.append("caption", formData.caption);
    data.append("isPublic", formData.isPublic);
    data.append("image", formData.image);

    try {
      setLoading(true);
      await axios.post(`${API_BASE}/gallery`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFormData({ title: "", caption: "", isPublic: true, image: null });
      fetchGallery();
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    try {
      await axios.delete(`${API_BASE}/gallery/${id}`);
      fetchGallery();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-6">
        Manage Gallery
      </h2>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md mb-6"
      >
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="caption"
          value={formData.caption}
          onChange={handleChange}
          placeholder="Caption"
          className="w-full mb-2 p-2 border rounded"
        />
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            name="isPublic"
            checked={formData.isPublic}
            onChange={handleChange}
          />
          Public
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="mb-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-[#1a1a1a] text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-[#1a1a1a] transition"
        >
          {loading ? "Uploading..." : "+ Add Image"}
        </button>
      </form>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image} // ✅ Direct Cloudinary URL
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-medium text-[#1a1a1a]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.caption}</p>
              <div className="flex justify-between mt-3">
                <button className="px-3 py-1 text-sm bg-yellow-400 text-[#1a1a1a] rounded hover:bg-yellow-500">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageGallery;
