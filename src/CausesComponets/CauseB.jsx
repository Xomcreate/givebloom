import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

const causes = [
  {
    title: "Emergency Shelter",
    description:
      "Thousands of families lost their homes when the earthquake struck Venezuela. Your support helps us provide temporary shelter, tents, and rebuilding materials for families with nowhere safe to sleep.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn60NmjirQqD0kAytogvP2CnVllxyBTInJqUSJpTg3Cw&s", // updated path
    progress: 80,
  },
  {
    title: "Healthcare Access",
    description:
      "Injuries and displacement have overwhelmed local clinics. Your donations help fund emergency medical care, medication, and treatment for survivors of the earthquake in the hardest-hit regions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoch5NzyRMJrW3lLknPsf4wwabWOL5Oa7ymjAKDJQi6Q&s=10",
    progress: 65,
  },
  {
    title: "Food & Nutrition",
    description:
      "With supply routes disrupted, hunger is a growing threat. By contributing to our food programs, you help deliver emergency meals and essential supplies to families cut off from basic resources.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkeedjzNXtwPJsNcuuyEkAe1_GGMCQ8It62zKx8_Mpw&s=10",
    progress: 75,
  },
  {
    title: "Rebuilding Homes",
    description:
      "A safe home provides stability after disaster. Your generosity allows us to repair and rebuild houses damaged by the earthquake, giving displaced families a place to return to and feel secure.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-kuFRzb-QgyFcXNNBufwfZykorO_j0T6U5z_5xfN4Q&s=10",
    progress: 50,
  },
  {
    title: "Clean Water Initiative",
    description:
      "The earthquake damaged water infrastructure across affected areas. We're working to restore access to clean, safe drinking water, helping prevent disease outbreaks in the aftermath of the disaster.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3jYwA_pu02tGNHYps66GM8H6I-uf6Rx7mo--o0PtYg&s=10",
    progress: 90,
  },
  {
    title: "Support for Women & Families",
    description:
      "Women are often the anchor for families rebuilding after disaster. Your support helps provide essential supplies, childcare resources, and support programs to women leading their households through recovery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr9BBt-EF373xFGOLHnpkRYW6poQQTE8Ad8oaF62DMAg&s=10",
    progress: 70,
  },
];

function CauseCard({ cause, navigate }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${cause.progress}%` });
    } else {
      controls.start({ width: 0 });
    }
  }, [controls, isInView, cause.progress]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform flex flex-col items-center text-center"
    >
      <img
        src={cause.image}
        alt={cause.title}
        className="w-full h-56 object-cover"
        loading="lazy" // added lazy loading
      />
      <div className="p-6 flex flex-col items-center w-full">
        <h3 className="text-xl font-semibold mb-3">{cause.title}</h3>
        <p className="text-gray-600 mb-4">{cause.description}</p>

        {/* Animated Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-yellow-400 h-4 rounded-full"
          ></motion.div>
        </div>
        <span className="text-gray-700 text-sm mb-4">
          {cause.progress}% of goal reached
        </span>

        <button
          onClick={() => navigate("/donate")}
          className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
        >
          Donate Now
        </button>
      </div>
    </div>
  );
}

function CauseB() {
  const navigate = useNavigate();

  return (
    <section id="causeb" className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold mb-4">Venezuela Earthquake Relief</h2>
        <p className="text-gray-600 text-lg">
          These are the areas where your donation makes the biggest impact right
          now. Each cause represents an urgent, life-changing opportunity to
          support families recovering from the earthquake.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {causes.map((cause, idx) => (
          <CauseCard key={idx} cause={cause} navigate={navigate} />
        ))}
      </div>
    </section>
  );
}

export default CauseB;