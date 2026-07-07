import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // ✅ import navigation

function GalleryA() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZPVc8TqgDtBYG-XQvRdxcyhJ8iUYr1PnmOcwIA4Xlg&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHykQ23Eu02gflnH-Ds_V6E_7F7e5aBXLsAuKtqzLVQ&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpwNan52jR9ZUZSh4ZBoQTKRTlt2Oepc_pOvtnQH6Ew&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT39dcKa8oEW1VLX6dXR-9sq5659uh7ESu55SO1B2iYoA&s=10',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUiOdze_C78DaHMkAIb4VPC9vrr_IanEKhMye7kIFafQ&s=10',
  ];
  const loopImages = [...images, ...images]; // Duplicate images for loop
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden">
      {/* Continuous sliding images */}
      <motion.div
        className="absolute flex w-max h-full"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }} // slightly slowed down for scannability
      >
        {loopImages.map((img, index) => (
          <div
            key={index}
            className="w-screen h-full flex-shrink-0 relative"
          >
            <img
              src={img}
              alt={`Venezuela Crisis Relief Update ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy" // ✅ lazy loading
            />
          </div>
        ))}
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>

      {/* Hero content */}
      <div className="relative text-center text-white px-4 md:px-8 max-w-4xl mx-auto top-1/2 transform -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <FaHandsHelping className="mx-auto text-6xl md:text-8xl mb-6 text-yellow-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight uppercase tracking-wide text-yellow-400"
        >
          Venezuela Relief Operations in Action
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200"
        >
          Every update and field frame documents life-saving logistics, water system distribution, 
          and immediate emergency shelter construction across hardest-hit zones.
        </motion.p>

        {/* ✅ Button navigates to /donate */}
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(234,179,8,0.6)',
          }}
          onClick={() => navigate('/donate')} // ✅ route to donate
          className="bg-yellow-400 text-black font-extrabold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-md sm:text-lg shadow-lg hover:bg-yellow-500 transition"
        >
          Fund Immediate Relief Operations
        </motion.button>
      </div>
    </div>
  );
}

export default GalleryA;