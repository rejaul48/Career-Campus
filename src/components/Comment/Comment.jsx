import React, { useState } from "react";

const Comment = () => {
  const [comments, setComments] = useState([
    { id: 1, name: "Noah Pierre", text: "Excellent platform with seamless profile updates and user-friendly design. Highly recommend for career growth!", likes: 25, replies: 3 },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([
        ...comments,
        { id: Date.now(), name: "You", text: newComment, likes: 0, replies: 0 },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className=" max-w-4xl mx-auto  p-4  pb-24">
      {/* Add Comment Section */}
      <div className="mb-12">
        <textarea
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows="3"
          placeholder="Add comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          onClick={handleAddComment}
        >
          Submit
        </button>
      </div>

      {/* Comments Section */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Comments ({comments.length})</h3>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">{comment.name}</h4>
                <span className="text-gray-400 text-sm">{comment.likes} Likes</span>
              </div>
              <p className="mt-1 text-gray-700">{comment.text}</p>
              <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                <button className="hover:underline">Like</button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
