import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function GalleryB() {
  const [galleryImages, setGalleryImages] = useState([]);

  // Fetch public gallery images
  useEffect(() => {
    const fetchPublicGallery = async () => {
      try {
        const res = await axios.get("https://g-bloombk.onrender.com/api/gallery/public");
        setGalleryImages(res.data);
      } catch (error) {
        console.error("Error fetching public gallery:", error);
      }
    };
    fetchPublicGallery();
  }, []);

  if (galleryImages.length === 0) {
    return <p className="text-center py-20 text-lg">No images to display</p>;
  }

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="w-full py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Gallery
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {galleryImages.map((item, index) => (
          <motion.div
            key={item._id || index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Bigger Image */}
            <img
              src={`https://g-bloombk.onrender.com/api${item.image}`}
              alt={item.title}
              className="w-full h-72 object-cover"
            />

            {/* Title & Caption */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              {item.caption && (
                <p className="text-sm text-gray-600 mt-1">{item.caption}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default GalleryB;
