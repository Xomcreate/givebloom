import React, { useState, useEffect } from "react";
import axios from "axios";

// ✅ Deployed backend URL
const API_BASE = "https://g-bloombk.onrender.com/api/gallery";

function ManageGallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);

  // Fetch gallery items from backend
  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await axios.get(API_BASE);
      setGalleryItems(res.data);
    } catch (err) {
      console.error("❌ Error fetching gallery:", err);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit (upload to backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return alert("Please select an image.");

    const uploadData = new FormData();
    uploadData.append("title", formData.title);
    uploadData.append("description", formData.description);
    uploadData.append("image", formData.image);

    try {
      setLoading(true);
      await axios.post(API_BASE, uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFormData({ title: "", description: "", image: null });
      e.target.reset();
      fetchGallery(); // refresh gallery after upload
    } catch (err) {
      console.error("❌ Upload error:", err);
      alert("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete item
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this image?")) return;
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setGalleryItems(galleryItems.filter((item) => item._id !== id));
    } catch (err) {
      console.error("❌ Delete error:", err);
      alert("Delete failed. Please try again.");
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
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="mb-2"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-[#1a1a1a] text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-[#1a1a1a] transition"
        >
          {loading ? "Uploading..." : "+ Add Image"}
        </button>
      </form>

      {/* Gallery List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-medium text-[#1a1a1a]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
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

      {galleryItems.length === 0 && (
        <p className="text-gray-500 mt-6">No images uploaded yet.</p>
      )}
    </div>
  );
}

export default ManageGallery;
