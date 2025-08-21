import React from "react";
import { FaStar } from "react-icons/fa";

function BlogE({ name, comment, rating = 0 }) {
  // Get initials for avatar
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="p-5 rounded-2xl shadow-md transition-transform transform hover:-translate-y-2 bg-white text-center sm:text-left">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-3">
        <div className="w-12 h-12 rounded-full bg-gray-400 text-white flex items-center justify-center font-bold text-lg mx-auto sm:mx-0">
          {initials}
        </div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
      </div>
      <div className="flex justify-center sm:justify-start items-center mb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar
            key={i}
            className={`mr-1 ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
}

export default BlogE;
