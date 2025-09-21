import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const API_BASE = "https://g-bloombk.onrender.com/api/blogs"; // your backend URL

function BlogManage() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
    status: "draft",
  });
  const [editingBlog, setEditingBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API_BASE);
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image change with preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  // Reset form
  const resetForm = () => {
    setFormData({ title: "", content: "", image: null, status: "draft" });
    setEditingBlog(null);
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  // Submit blog (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("content", formData.content);
      data.append("status", formData.status);
      if (formData.image) data.append("image", formData.image);

      if (editingBlog) {
        await axios.put(`${API_BASE}/${editingBlog._id}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(API_BASE, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await fetchBlogs();
      resetForm();
    } catch (err) {
      console.error("Error saving blog:", err);
      alert("Failed to save blog. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  // Edit blog
  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      content: blog.content,
      image: null,
      status: blog.status || "draft",
    });
    setPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
      alert("Failed to delete blog. Check console for details.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Manage Blogs</h2>

      {/* Blog Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg mb-10 border max-w-3xl mx-auto"
      >
        <div className="mb-4">
          <label className="block mb-1">Blog Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Blog Content *</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            className="w-full text-sm text-gray-600 file:py-2 file:px-4 file:bg-yellow-400 file:text-[#1a1a1a] file:rounded-full cursor-pointer"
          />
          {preview && (
            <div className="mt-2">
              <p className="text-xs text-gray-500">Selected image:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-20 object-cover rounded mt-1 border"
              />
            </div>
          )}
          {editingBlog?.imageUrl && !preview && (
            <div className="mt-2">
              <p className="text-xs text-gray-500">Current image:</p>
              <img
                src={editingBlog.imageUrl}
                alt="Current"
                className="w-32 h-20 object-cover rounded mt-1 border"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 bg-[#1a1a1a] text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-[#1a1a1a] transition disabled:opacity-50"
          >
            {loading ? "Saving..." : editingBlog ? "Update Blog" : "+ Add Blog"}
          </button>
          {editingBlog && (
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Blog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {blogs.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No blogs yet. Add one above!
          </p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition border"
            >
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {blog.content}
                </p>
                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                    blog.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {blog.status || "draft"}
                </span>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-3 py-1 text-sm bg-yellow-400 text-[#1a1a1a] rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BlogManage;
