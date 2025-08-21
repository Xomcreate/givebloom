import React, { useState } from "react";
import BlogE from "./BlogE";

function BlogD() {
  const [comments, setComments] = useState([
    { id: 1, name: "Alice Johnson", comment: "This is such an inspiring post!", rating: 5 },
    { id: 2, name: "Mark Smith", comment: "I love how you are making a difference.", rating: 4 },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    setComments([
      { id: comments.length + 1, name: "Anonymous", comment: newComment, rating: newRating },
      ...comments,
    ]);
    setNewComment("");
    setNewRating(0);
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-8">
          Comments & Reviews
        </h2>

        {/* Comment Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-6 mb-10 text-center sm:text-left"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">
            Write a Comment
          </h3>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            rows="4"
            placeholder="Enter your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />

          {/* Star Rating Input */}
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
        </form>

        {/* Comments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
          {comments.map((c, i) => (
            <BlogE
              key={c.id}
              name={c.name}
              comment={c.comment}
              rating={c.rating}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogD;
