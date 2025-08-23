import React from "react";
import { motion } from "framer-motion";
import testimonialImage from "../assets/happy.jpg"; // ✅ use your jpg file

function TestA() {
  return (
    <section className="relative bg-yellow-400 text-black">
      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-24 text-center md:text-left md:flex md:items-center md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            “GiveBloom transformed my life”
          </h2>
          <p className="text-lg md:text-xl mb-6">
            “Thanks to GiveBloom’s programs, my children now have access to
            education and healthcare. Their support truly changed our future.”
          </p>
          <span className="font-semibold">— Sophia Lee</span>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block md:w-1/2"
        >
          <img
            src={testimonialImage} // ✅ using local asset
            alt="Testimonial Hero"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>

      {/* SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.79,22.3,103.74,29,158,17.39C230,49,284,13,339,3.17,400-7.29,460,13,520,29.32c56,15,112,20,168,8.71,59-12.14,113-41.31,172-48.3C944,2.13,1000,12,1057,26.67c54,13.89,113,30.36,143,40.32V0Z"
            className="fill-black"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default TestA;
