import React, { useState } from "react";

const CommentAdder = ({ addComment }) => {
  const [commentBody, setCommentBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment({ body: commentBody, username: "jessjelly" });
    setCommentBody("");
  };

  const handleChange = (event) => {
    setCommentBody(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={commentBody} />
      <button>Post</button>
    </form>
  );
};

export default CommentAdder;
