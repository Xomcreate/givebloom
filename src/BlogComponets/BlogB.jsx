import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://g-bloombk.onrender.com"; // Backend URL

function BlogB() {
  const [blogs, setBlogs] = useState([]);

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

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Latest Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-lg shadow-md overflow-hidden bg-white"
          >
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-700 text-sm">{blog.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogB;
