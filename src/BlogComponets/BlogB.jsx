import React, { useState } from "react";
import { FaSearch, FaChevronRight } from "react-icons/fa";

function BlogB() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Education", "Food", "Water", "Shelter"];
  const recentPosts = [
    { title: "How Education Empowers Communities", date: "Aug 15, 2025" },
    { title: "Providing Clean Water in Rural Areas", date: "Aug 12, 2025" },
    { title: "Food Distribution Impact Stories", date: "Aug 10, 2025" },
  ];

  const posts = [
    {
      id: 1,
      title: "Education for All",
      desc: "Bringing knowledge and hope to underserved children.",
      img: "https://via.placeholder.com/600x400",
      category: "Education",
    },
    {
      id: 2,
      title: "Food for the Hungry",
      desc: "Delivering meals to families in need worldwide.",
      img: "https://via.placeholder.com/600x400",
      category: "Food",
    },
    {
      id: 3,
      title: "Clean Water Projects",
      desc: "Ensuring safe drinking water for rural communities.",
      img: "https://via.placeholder.com/600x400",
      category: "Water",
    },
    {
      id: 4,
      title: "Safe Shelter Initiative",
      desc: "Building homes and shelters for displaced families.",
      img: "https://via.placeholder.com/600x400",
      category: "Shelter",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Sidebar */}
        <div className="space-y-8 order-1 md:order-2">
          {/* Search */}
          <div className="bg-white shadow-md rounded-2xl p-5">
            <h2 className="text-lg font-bold mb-3 text-yellow-400">Search</h2>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search posts..."
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="bg-yellow-400 text-gray-900 px-3 py-2 hover:bg-yellow-300 transition">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white shadow-md rounded-2xl p-5">
            <h2 className="text-lg font-bold mb-3 text-yellow-400">Categories</h2>
            <ul className="space-y-2">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center justify-between cursor-pointer ${
                    selectedCategory === cat
                      ? "text-yellow-400 font-semibold"
                      : "text-gray-700 hover:text-yellow-400"
                  }`}
                >
                  <span>{cat}</span>
                  <FaChevronRight className="text-sm" />
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white shadow-md rounded-2xl p-5">
            <h2 className="text-lg font-bold mb-3 text-yellow-400">Recent Posts</h2>
            <ul className="space-y-3">
              {recentPosts.map((post, i) => (
                <li key={i} className="border-b border-gray-300 pb-2 last:border-0">
                  <h4 className="font-semibold text-gray-900 hover:text-yellow-400 cursor-pointer">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 md:order-1">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <span className="text-sm text-yellow-400 font-semibold uppercase">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-xl text-gray-900">{post.title}</h3>
                  <p className="text-gray-700 text-sm">{post.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-2 text-gray-500">No blog posts match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogB;
