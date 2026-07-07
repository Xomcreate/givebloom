import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaImages } from "react-icons/fa";

function GalleryB() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch public gallery images
  useEffect(() => {
    const fetchPublicGallery = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://g-bloombk.onrender.com/api/gallery");
        setGalleryImages(res.data);
      } catch (error) {
        console.error("Error fetching public gallery:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPublicGallery();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full py-20 px-4 md:px-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="inline-block bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 tracking-wide uppercase">
          Moments From the Ground
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
          Our Gallery
        </h2>
        <p className="text-gray-600">
          A look at the relief efforts, volunteers, and communities we've
          supported since the earthquake in Venezuela.
        </p>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-white shadow-md animate-pulse"
            >
              <div className="w-full h-72 bg-gray-200"></div>
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && galleryImages.length === 0 && (
        <div className="text-center py-16">
          <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaImages className="text-yellow-500 text-2xl" />
          </div>
          <p className="text-gray-500">No images to display yet — check back soon.</p>
        </div>
      )}

      {/* Grid Layout */}
      {!loading && galleryImages.length > 0 && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {galleryImages.map((item, index) => (
            <motion.div
              key={item._id || index}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              variants={itemVariants}
            >
              {/* Image with overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  {item.description && (
                    <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Title */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default GalleryB;