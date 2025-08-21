import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function ContactC() {
  const cards = [
    {
      icon: <FaPhoneAlt size={28} />,
      title: "Call Us Today",
      subtitle: "24/7 Service",
      details: [
        "+2349076084515",
        "We are always available for your inquiries and support."
      ],
      bg: "bg-black text-white",
    },
    {
      icon: <FaEnvelope size={28} />,
      title: "Mail Information",
      subtitle: "Drop Line",
      details: [
        "Priscaojimba15@gmail.com",
        "Send us your questions or feedback and we'll respond quickly."
      ],
      bg: "bg-black text-white",
    },
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: "Our Location",
      subtitle: "Address",
      details: [
        "50 Abeje Street, Off Itiri Bus Stop",
        "Apapa, Lagos State, Nigeria",
        "Visit us during office hours for assistance or inquiries."
      ],
      bg: "bg-yellow-400 text-black",
    },
  ];

  // card animation: fade in and move up
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="w-full bg-[#f8f7f4] py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-white shadow-md rounded-2xl p-8 flex-1 flex flex-col hover:shadow-xl transition min-h-[340px]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-4">
              <div
                className={`${card.bg} p-5 rounded-md flex items-center justify-center`}
              >
                {card.icon}
              </div>
              <div>
                <p className="text-gray-500 text-base md:text-lg">{card.subtitle}</p>
                <h2 className="font-semibold text-xl md:text-2xl">{card.title}</h2>
              </div>
            </div>

            {/* Underline */}
            <div className="flex items-center mt-2 mb-4">
              <span className="h-[2px] w-12 bg-yellow-400 rounded"></span>
              <span className="h-[1px] flex-1 bg-gray-200"></span>
            </div>

            {/* Details */}
            <div className="text-gray-600 text-base md:text-lg space-y-2 flex-1">
              {card.details.map((d, idx) => (
                <p key={idx}>{d}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ContactC;
