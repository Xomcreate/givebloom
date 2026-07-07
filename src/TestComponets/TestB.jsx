import React, { useState, useEffect } from "react";

// Venezuela-focused testimonials (earthquake-affected areas)
const testimonials = [
  {
    name: "Valentina Márquez",
    comment:
      "GiveBloom has changed the lives of so many children in our community here in Caracas since the earthquake. Truly inspiring!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Andrés Pérez",
    comment:
      "I am proud to partner with GiveBloom. Their dedication to helping families in La Guaira rebuild is unmatched.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Daniela Sofía Torres",
    comment:
      "Thanks to GiveBloom, our family in Catia La Mar has access to basic healthcare and shelter after the earthquake.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "José Miguel Rodríguez",
    comment:
      "Amazing organization! Their programs are making a real difference for families recovering in Morón.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "María Fernanda González",
    comment:
      "GiveBloom’s dedication is unmatched. We feel supported and cared for in every way, right here in Naiguatá.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Luis Alejandro García",
    comment:
      "Their programs bring hope and real change to our neighborhood in Caraballeda. I feel proud to contribute.",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Andrea Carolina Salas",
    comment:
      "Thanks to GiveBloom, our community in Macuto now has access to clean water and emergency support.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Ricardo Alfonso Blanco",
    comment:
      "GiveBloom’s work is inspiring and impactful. Their support changed our lives here in Chacao, Caracas.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Camila Isabel Duarte",
    comment:
      "Their dedication and passion make our part of La Guaira a better place. Grateful to support during recovery!",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
  },
];

function TestB() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + cardsPerView >= testimonials.length ? 0 : prev + cardsPerView
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <section className="bg-gray-50 text-black py-20 px-6 md:px-16 relative">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Hear from Our Supporters in Venezuela
        </h2>
        <p className="text-gray-700 text-lg">
          Real stories from communities recovering from the 2026 earthquakes, whose lives have been positively impacted by GiveBloom.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto relative">
        <div className="flex gap-6 overflow-hidden">
          {visibleTestimonials.map((testi, idx) => (
            <div
              key={idx}
              className="flex-1 bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-xl transition-transform duration-500"
            >
              <img
                src={testi.avatar}
                alt={testi.name}
                className="w-20 h-20 rounded-full mb-4 border-2 border-yellow-400"
              />
              <p className="italic text-gray-700 mb-4">"{testi.comment}"</p>
              <h3 className="font-semibold text-black">{testi.name}</h3>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex - cardsPerView < 0
                ? Math.max(testimonials.length - cardsPerView, 0)
                : currentIndex - cardsPerView
            )
          }
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"
        >
          &#8592;
        </button>
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex + cardsPerView >= testimonials.length
                ? 0
                : currentIndex + cardsPerView
            )
          }
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full hover:bg-yellow-500 transition"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default TestB;