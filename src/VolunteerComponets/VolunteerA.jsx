import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';
import heroImage from '../assets/boy.jpg'; // replace with your hero image

function VolunteerA() {
  return (
    <div
      className="w-full h-[70vh] md:h-[80vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white px-4 md:px-8 max-w-4xl"
      >
        {/* Animated people icon */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-6"
        >
          <FaUsers className="text-6xl md:text-8xl text-yellow-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
        >
          Join Our Volunteers & Partners Community!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl mb-8"
        >
          Collaborate, volunteer, or partner with us to make a lasting impact. Together, we create change that matters.
        </motion.p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 20px rgba(255,255,255,0.8)',
            }}
            className="bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl transition"
          >
            Become a Volunteer
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 20px rgba(255,255,255,0.8)',
            }}
            className="bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl transition"
          >
            Become a Partner
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default VolunteerA;
