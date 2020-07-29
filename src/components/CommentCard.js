import React from "react";

const CommentCard = ({ body, username, votes, created_at }) => {
  return (
    <li>
      <p>{body}</p>
      <h3>author: {username}</h3>
      <h4>votes: {votes}</h4>
      <h4>created_at: {created_at}</h4>
    </li>
  );
};

export default CommentCard;
