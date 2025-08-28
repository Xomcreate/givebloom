import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar-style header */}
      <div className="bg-black text-white px-6 py-4 flex items-center justify-center">
        <h1 className="text-3xl font-bold tracking-wide text-white">GiveBloom</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
        <h1 className="text-6xl font-extrabold text-yellow-400 mb-4">404</h1>
        <p className="text-2xl font-semibold text-black mb-2">Page Not Found</p>
        <p className="text-gray-700 mb-6">
          The page you are looking for does not exist or you are not authorized to view it.
        </p>
        <Link
          to="/"
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Go Back Home
        </Link>
      </div>

      {/* Footer-like area */}
      <div className="bg-black text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} GiveBloom. All rights reserved.</p>
      </div>
    </div>
  );
}

export default NotFound;
