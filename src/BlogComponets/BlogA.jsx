import React from "react";
import { FaBookOpen } from "react-icons/fa";

function BlogA() {
  return (
    <div
      className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Xn74gVoFexOvevBVhc-e-0r4GgEFDNdRjjtZ_5uSCg&s=10)` }} // updated path
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text content */}
      <div className="relative text-center text-white px-4 md:px-8">
        <FaBookOpen className="mx-auto text-4xl sm:text-5xl md:text-6xl mb-3 md:mb-4 text-yellow-400" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          Field Dispatches & Relief Updates
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Stay informed with real-time reports from our emergency teams on the ground, 
          transparent project tracking, and stories of recovery from the earthquake zones.
        </p>
      </div>
    </div>
  );
}

export default BlogA;