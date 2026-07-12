import React from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactC() {
  const cards = [
    {
      icon: <FaPhoneAlt size={24} />,
      title: "Call Us Today",
      subtitle: "Direct Support",
      details: [
        "+1 (248) 759-5836",
        "Reach out directly for partnership queries, immediate assistance, or direct contact with our coordinators."
      ],
      accentColor: "group-hover:bg-yellow-400",
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email Channels",
      subtitle: "Drop a Line",
      details: [
        "givebloom001@gmail.com",
        "Send us your proposals, program ideas, or donation confirmations. We review our inbox daily."
      ],
      accentColor: "group-hover:bg-blue-600",
    },
    {
      icon: <FaGlobeAmericas size={24} />,
      title: "Scope of Impact",
      subtitle: "Where We Work",
      details: [
        "Digital & Field Operations",
        "Serving local Venezuelan regions & coordinating with international diaspora teams completely remotely."
      ],
      accentColor: "group-hover:bg-red-600",
    },
  ];

  // Card Animation: clean slide upwards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <div className="w-full bg-slate-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="group bg-white shadow-xl shadow-slate-100 rounded-2xl p-8 flex-1 flex flex-col justify-between border border-slate-100 transition relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
          >
            {/* 
              Tricolor Interaction: Hovering over individual cards dynamically highlights 
              one of Venezuela's symbolic national flag colors on the dynamic banner indicator.
            */}
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-transparent transition-all duration-300 ${card.accentColor}`}></div>

            <div>
              {/* Icon + Header Section */}
              <div className="flex items-center gap-4 mb-5">
                <div className="p-4 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-lg shadow-slate-900/10 group-hover:bg-slate-800 transition-colors">
                  {card.icon}
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-wider text-xs">{card.subtitle}</p>
                  <h2 className="font-black text-slate-800 text-xl lg:text-2xl mt-0.5">{card.title}</h2>
                </div>
              </div>

              {/* Decorative Custom Divider line */}
              <div className="flex items-center my-4">
                <span className="h-[2px] w-12 bg-slate-900 rounded"></span>
                <span className="h-[1px] flex-1 bg-slate-100"></span>
              </div>

              {/* Informational Text */}
              <div className="text-slate-600 text-base space-y-3">
                <p className="font-bold text-slate-900 break-words text-lg">
                  {card.details[0]}
                </p>
                <p className="leading-relaxed text-sm md:text-base">
                  {card.details[1]}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ContactC;