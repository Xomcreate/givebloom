import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

// Example images
import educationImg from "../assets/ee.jpg";
import healthImg from "../assets/hospital.jpg";
import foodImg from "../assets/vol.jpg";
import shelterImg from "../assets/how.jpg";
import waterImg from "../assets/water.jpg";
import empowermentImg from "../assets/lo.jpg";

const causes = [
  {
    title: "Education for Every Child",
    description:
      "We believe education is the foundation of a brighter future. Your support helps us provide books, uniforms, school fees, and access to quality education for children who would otherwise miss out on learning opportunities.",
    image: educationImg,
    progress: 80,
  },
  {
    title: "Healthcare Access",
    description:
      "Access to healthcare can change lives. Your donations help fund vaccinations, medical check-ups, and essential treatments for children and families in underserved communities, keeping them healthy and safe.",
    image: healthImg,
    progress: 65,
  },
  {
    title: "Food & Nutrition",
    description:
      "Hunger should never limit a child’s potential. By contributing to our food programs, you help deliver nutritious meals and essential supplements to communities struggling with malnutrition and food insecurity.",
    image: foodImg,
    progress: 75,
  },
  {
    title: "Safe Shelter",
    description:
      "A safe home provides stability and hope. Your generosity allows us to build and repair homes for families living in unsafe or inadequate conditions, giving them a place to thrive and feel secure.",
    image: shelterImg,
    progress: 50,
  },
  {
    title: "Clean Water Initiative",
    description:
      "Water is life. We implement projects that provide access to clean and safe drinking water, helping to reduce waterborne diseases and improve health, hygiene, and quality of life for entire communities.",
    image: waterImg,
    progress: 90,
  },
  {
    title: "Women Empowerment",
    description:
      "Empowering women strengthens families and communities. Your support helps provide skills training, microloans, and educational programs to women, allowing them to achieve financial independence and create a sustainable future.",
    image: empowermentImg,
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
        <h2 className="text-3xl font-extrabold mb-4">Our Key Causes</h2>
        <p className="text-gray-600 text-lg">
          These are the areas where your donations make the biggest impact. Each
          cause represents a life-changing opportunity to transform communities
          and empower individuals.
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
