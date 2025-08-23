import React from 'react';
import { motion } from 'framer-motion';
import { FaHandsHelping } from 'react-icons/fa';
import img1 from '../assets/so.jpg';
import img2 from '../assets/lunch.jpg';
import img3 from '../assets/teach.jpg';
import img4 from '../assets/do.jpg';
import img5 from '../assets/ka.jpg';

function GalleryA() {
  const images = [img1, img2, img3, img4, img5];

  // Duplicate images to create an infinite loop
  const loopImages = [...images, ...images];

  return (
    <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden">
      {/* Continuous sliding images */}
      <motion.div
        className="absolute flex w-max h-full"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {loopImages.map((img, index) => (
          <div
            key={index}
            className="w-screen h-full bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50"></div>

      {/* Hero content */}
      <div className="relative text-center text-white px-4 md:px-8 max-w-4xl mx-auto top-1/2 transform -translate-y-1/2">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaHandsHelping className="mx-auto text-6xl md:text-8xl mb-6 text-yellow-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          See the Change You Make!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl mb-8"
        >
          Every image tells a story of hope, joy, and transformation. Your support brings smiles and changes lives.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 20px rgba(255,255,255,0.8)',
          }}
          className="bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl transition"
        >
          Donate Now & Make Impact
        </motion.button>
      </div>
    </div>
  );
}

export default GalleryA;
