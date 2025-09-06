import React, { useEffect, useState } from "react";
import { FaStar, FaCheck, FaTrash } from "react-icons/fa";
import axios from "axios";

function ReviewManage() {
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews
  const fetchReviews = async () => {
    try {
      const res = await axios.get("https://g-bloombk.onrender.com/api/reviews");
      setReviews(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Approve a review
  const handleApprove = async (id) => {
    try {
      await axios.patch(`https://g-bloombk.onrender.com/api/reviews/${id}/approve`);
      fetchReviews();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete a review
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://g-bloombk.onrender.com/api/reviews/${id}`);
      fetchReviews();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Review Management</h1>
      <div className="bg-[#1a1a1a] text-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-yellow-400">All Reviews</h2>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review._id} className="border-b border-gray-700 pb-4 last:border-none">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold">{review.name}</h3>
                <span className="text-sm text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < review.rating ? "text-yellow-400" : "text-gray-600"}
                  />
                ))}
              </div>

              <p className="text-gray-300 mb-2">{review.comment}</p>

              <div className="flex gap-2">
                {!review.approved && (
                  <button
                    onClick={() => handleApprove(review._id)}
                    className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                  >
                    <FaCheck /> Approve
                  </button>
                )}
                <button
                  onClick={() => handleDelete(review._id)}
                  className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  <FaTrash /> Delete
                </button>
              </div>

              {review.approved && (
                <span className="text-green-400 text-sm mt-1 block">Approved</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewManage;
