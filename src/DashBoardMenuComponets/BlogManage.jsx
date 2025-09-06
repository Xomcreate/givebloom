import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE = "https://g-bloombk.onrender.com"; // ✅ Updated live URL

function BlogManage() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    category: "",
    author: "",
    status: "Draft",
    image: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/blogs`);
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs", err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      setLoading(true);
      if (editingId) {
        await axios.put(`${API_BASE}/api/blogs/${editingId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axios.post(`${API_BASE}/api/blogs`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      setFormData({
        title: "",
        desc: "",
        category: "",
        author: "",
        status: "Draft",
        image: null,
      });
      setEditingId(null);
      fetchBlogs();
    } catch (err) {
      console.error("Error saving blog", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setFormData({
      title: blog.title,
      desc: blog.desc,
      category: blog.category,
      author: blog.author,
      status: blog.status,
      image: null,
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await axios.delete(`${API_BASE}/api/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog", err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-6 text-center">
        Manage Blogs
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md mb-6 max-w-3xl mx-auto"
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
        <textarea
          name="desc"
          value={formData.desc}
          onChange={handleChange}
          placeholder="Description"
          className="w-full mb-2 p-2 border rounded"
          rows="3"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full mb-2 p-2 border rounded"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        >
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>
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
          className="px-4 py-2 bg-[#1a1a1a] text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-[#1a1a1a] transition w-full"
        >
          {loading ? "Saving..." : editingId ? "Update Blog" : "+ Add New Blog"}
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {blog.image && (
              <img
                src={`${API_BASE}${blog.image}`}
                alt={blog.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-md font-medium text-[#1a1a1a]">{blog.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{blog.desc}</p>
              <p className="text-xs text-gray-500 mt-1">
                {blog.category} | {blog.author} | {blog.status}
              </p>
              <div className="flex justify-between mt-3">
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
        ))}
      </div>
    </div>
  );
}

export default BlogManage;
