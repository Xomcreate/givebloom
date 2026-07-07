import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers } from 'react-icons/fa';

function VolunteerA() {
  return (
    <div className="w-full h-[70vh] md:h-[80vh] relative flex items-center justify-center overflow-hidden">
      {/* Hero Image from public/images */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbt3fh6Pp0vsHgt6T8jPThR_9REAo7pIscjGgW4qje7Q&s=10"
        alt="Emergency Crisis Volunteers on Ground"
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy" // ✅ lazy loading
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

      {/* Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center text-white px-4 md:px-8 max-w-4xl"
      >
        {/* Animated people icon */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="flex justify-center mb-6"
        >
          <FaUsers className="text-6xl md:text-8xl text-yellow-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight uppercase tracking-wide text-yellow-400"
        >
          Join Our Crisis Response Network
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          We are deploying logistical partners, medical personnel, and field volunteers 
          directly into the affected regions of Venezuela. Stand with us to accelerate 
          on-the-ground disaster recovery.
        </motion.p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#volunteerd"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 20px rgba(234,179,8,0.5)',
            }}
            className="bg-yellow-400 text-black font-extrabold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-md sm:text-lg shadow-lg hover:bg-yellow-500 transition inline-block"
          >
            Deploy as a Volunteer
          </motion.a>

          <motion.a
            href="#volunteerd"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 20px rgba(234,179,8,0.5)',
            }}
            className="bg-transparent text-yellow-400 border-2 border-yellow-400 font-extrabold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-md sm:text-lg shadow-lg hover:bg-yellow-400 hover:text-black transition inline-block"
          >
            Apply as a Logistics Partner
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default VolunteerA;