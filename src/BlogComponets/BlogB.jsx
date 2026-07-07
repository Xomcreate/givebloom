import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
          Latest Blogs
        </h2>
        <p className="text-gray-500 text-center mb-10">
          Updates from our earthquake relief efforts in Venezuela.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog._id}
              variants={cardVariants}
              className="rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
            >
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-52 object-cover"
                />
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default BlogB;