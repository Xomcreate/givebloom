// src/DashBoardMenuComponets/BlogManage.jsx
import React from "react";

function BlogManage() {
  const blogs = [
    {
      id: 1,
      title: "Helping Hands for Children",
      author: "Admin",
      date: "2025-08-20",
      status: "Published",
    },
    {
      id: 2,
      title: "Our New Volunteer Program",
      author: "Prisca",
      date: "2025-08-18",
      status: "Draft",
    },
  ];

  return (
    <div className="p-4 md:p-6 text-gray-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">
          Manage Blog Posts
        </h1>
        <button className="bg-yellow-400 text-[#1a1a1a] font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
          + New Post
        </button>
      </div>

      {/* Blog Table */}
      <div className="overflow-x-auto bg-[#1a1a1a] text-white shadow rounded-lg">
        <table className="w-full text-sm md:text-base border-collapse">
          <thead className="bg-[#2a2a2a] text-yellow-400 text-left">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3 hidden sm:table-cell">Author</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog.id}
                className="border-t border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="p-3">{blog.title}</td>
                <td className="p-3 hidden sm:table-cell">{blog.author}</td>
                <td className="p-3">{blog.date}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      blog.status === "Published"
                        ? "bg-green-900 text-green-400"
                        : "bg-yellow-900 text-yellow-400"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>
                <td className="p-3 flex justify-center gap-4">
                  <button className="text-yellow-400 hover:text-yellow-300 transition">
                    ✏️ Edit
                  </button>
                  <button className="text-red-400 hover:text-red-300 transition">
                    🗑️ Delete
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

export default BlogManage;
