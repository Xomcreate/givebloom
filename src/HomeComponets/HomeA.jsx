import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HomeA() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://videos.pexels.com/video-files/855136/855136-hd_1920_1080_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none" // ✅ lazy load
      ></video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 sm:mb-6"
        >
          A Small Gift Can Change <br /> Someone’s Entire Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-2xl mb-6 sm:mb-8 leading-relaxed"
        >
          Every meal shared, every hand extended, every moment of kindness
          plants hope where despair once lived. Together, we can rewrite the
          future for children, families, and communities in need.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/volunteer")}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 hover:bg-yellow-500 text-black text-sm sm:text-lg rounded-full shadow-lg transition flex items-center gap-2"
        >
          Be Part of the Story
          <span className="bg-white text-black px-1.5 py-0.5 rounded-full text-sm">
            ↗
          </span>
        </motion.button>
      </div>

      {/* Unique Wave SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 sm:h-32"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F9FAFB"
            fillOpacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default HomeA;
