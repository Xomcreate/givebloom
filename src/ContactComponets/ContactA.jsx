import React from "react";
import { FaHandsHelping } from "react-icons/fa";

function ContactA() {
  return (
    <div
      className="w-full h-[60vh] md:h-[75vh] bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-525RIKr1Mql7HQrzMXU_NxwonTin7nPnzoxZkWCuw&s=10)` }} // ✅ keeping public/images path
    >
      {/* 
        Vibrant Gradient Overlay: 
        Blends from a deep Venezuelan corporate blue into a dark overlay 
        to maintain exceptional text readability while adding cultural depth.
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/80 to-black/85"></div>

      {/* Venezuela Flag Tricolor Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 flex z-10">
        <div className="w-1/3 h-full bg-yellow-400"></div>
        <div className="w-1/3 h-full bg-blue-600"></div>
        <div className="w-1/3 h-full bg-red-600"></div>
      </div>

      {/* Text content */}
      <div className="relative text-center text-white px-6 md:px-8 max-w-3xl mx-auto space-y-4 md:space-y-6">
        
        {/* Animated icon container */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg mb-2">
          <FaHandsHelping className="text-3xl sm:text-4xl md:text-5xl text-yellow-400" />
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
          Building Hope for <span className="text-yellow-400">Venezuela</span>, Together
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
          Whether you want to coordinate aid, offer support, make a donation, or ask a question—your connection fuels our community's future. ¡Contamos contigo!
        </p>

        {/* Button Wrapper */}
        <div className="pt-2">
          <a 
            href="#contact-form"
            className="inline-block bg-yellow-400 text-slate-950 font-extrabold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-yellow-500 transition-all duration-200 shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/30 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base md:text-lg tracking-wide uppercase"
          >
            Get In Touch
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default ContactA;