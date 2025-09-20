import React, { useState } from "react";

function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or Update Blog
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      alert("Please fill in all fields");
      return;
    }

    if (editingIndex !== null) {
      // Update existing blog
      const updatedBlogs = [...blogs];
      updatedBlogs[editingIndex] = formData;
      setBlogs(updatedBlogs);
      setEditingIndex(null);
    } else {
      // Add new blog
      setBlogs([...blogs, formData]);
    }

    // Reset form
    setFormData({ title: "", content: "" });
  };

  // Edit Blog
  const handleEdit = (index) => {
    setFormData(blogs[index]);
    setEditingIndex(index);
  };

  // Delete Blog
  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-6">
        Manage Blog
      </h2>

      {/* Blog Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md mb-6"
      >
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
          required
        />
        <textarea
          name="content"
          placeholder="Blog Content"
          value={formData.content}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded h-32"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#1a1a1a] text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-[#1a1a1a] transition"
        >
          {editingIndex !== null ? "Update Blog" : "+ Add Blog"}
        </button>
      </form>

      {/* Blog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.length === 0 ? (
          <p className="text-gray-500">No blogs yet. Add one above!</p>
        ) : (
          blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <h3 className="text-md font-medium text-[#1a1a1a]">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{blog.content}</p>

              <div className="flex justify-between mt-3">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 text-sm bg-yellow-400 text-[#1a1a1a] rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BlogManager;
