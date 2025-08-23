import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function GalleryB({ galleryImages = [] }) {
  const [current, setCurrent] = useState(0);
  const length = galleryImages.length;

  // If no images, show fallback message
  if (length === 0) {
    return <p className="text-center py-20 text-lg">No images to display</p>;
  }

  // Go to previous slide
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Go to next slide
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="w-full py-16 px-4 md:px-16 bg-gray-50 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Gallery
      </h2>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.x < -50) nextSlide();
              if (info.offset.x > 50) prevSlide();
            }}
            className="w-full cursor-grab select-none"
          >
            <img
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 text-white text-center text-lg">
              {galleryImages[current].caption}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default GalleryB;
