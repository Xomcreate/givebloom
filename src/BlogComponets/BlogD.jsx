import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogE from "./BlogE";

// Use your Render URL
const API_BASE = "https://g-bloombk.onrender.com/api";

function BlogD() {
  const [comments, setComments] = useState([]);
  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch only approved reviews
  useEffect(() => {
    axios.get(`${API_BASE}/reviews`)
      .then(res => {
        const approved = res.data.filter(r => r.approved);
        setComments(approved);
      })
      .catch(err => console.log(err));
  }, []);

  // Submit new review
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment || !newName) return;

    try {
      await axios.post(`${API_BASE}/reviews`, {
        name: newName,
        comment: newComment,
        rating: newRating,
      });

      setNewName("");
      setNewComment("");
      setNewRating(0);

      setSuccessMessage("Review submitted successfully!");
      setTimeout(() => setSuccessMessage(""), 3000); // clear after 3s
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 text-center mb-8">
          Comments & Reviews
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-6 mb-10 text-center sm:text-left"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            Write a Comment
          </h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />

          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows="4"
            placeholder="Enter your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />

          <div className="flex justify-center sm:justify-start items-center mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                type="button"
                key={i}
                onClick={() => setNewRating(i)}
                className="mr-1"
              >
                <span
                  className={`text-2xl ${i <= newRating ? "text-yellow-400" : "text-gray-300"}`}
                >
                  ★
                </span>
              </button>
            ))}
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition"
          >
            Submit
          </button>

          {successMessage && (
            <p className="text-green-500 mt-3 font-semibold">{successMessage}</p>
          )}
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
          {comments.map((c) => (
            <BlogE key={c._id} name={c.name} comment={c.comment} rating={c.rating} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogD;
