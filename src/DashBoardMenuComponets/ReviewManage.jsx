import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewManage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment: "Amazing platform! It made donating so easy.",
      date: "Aug 21, 2025",
    },
    {
      id: 2,
      name: "Mary Smith",
      rating: 4,
      comment: "Great experience, but I’d like more payment options.",
      date: "Aug 20, 2025",
    },
  ]);

  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  // Handle star click
  const handleStarClick = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  // Submit review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.rating || !newReview.comment) return;

    const newEntry = {
      id: reviews.length + 1,
      ...newReview,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    };

    setReviews([newEntry, ...reviews]);
    setNewReview({ name: "", rating: 0, comment: "" }); // reset
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-900">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Review Management</h1>

      {/* Add Review Form */}
      <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-yellow-400">Post a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Star Rating */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={28}
                onClick={() => handleStarClick(star)}
                className={`cursor-pointer ${
                  star <= newReview.rating ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            ))}
          </div>

          <textarea
            placeholder="Write your review..."
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 text-[#1a1a1a] font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-yellow-400">All Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-700 pb-4 last:border-none"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">{review.name}</h3>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              {/* Stars */}
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < review.rating ? "text-yellow-400" : "text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewManage;
