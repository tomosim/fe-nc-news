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
      <label>
        New comment:
        <input onChange={handleChange} type="text" value={commentBody} />
      </label>
      <button>Post</button>
    </form>
  );
};

export default CommentAdder;
