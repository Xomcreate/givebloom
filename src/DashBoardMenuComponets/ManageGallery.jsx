import React from "react";

function ManageGallery() {
  const galleryItems = [
    { id: 1, image: "https://via.placeholder.com/300", title: "Charity Event 1" },
    { id: 2, image: "https://via.placeholder.com/300", title: "Charity Event 2" },
    { id: 3, image: "https://via.placeholder.com/300", title: "Donation Drive" },
    { id: 4, image: "https://via.placeholder.com/300", title: "Outreach Program" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#1a1a1a]">Manage Gallery</h2>
        <button className="px-4 py-2 bg-[#1a1a1a] text-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-[#1a1a1a] transition">
          + Add Image
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-medium text-[#1a1a1a]">{item.title}</h3>
              <div className="flex justify-between mt-3">
                <button className="px-3 py-1 text-sm bg-yellow-400 text-[#1a1a1a] rounded hover:bg-yellow-500">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageGallery;
