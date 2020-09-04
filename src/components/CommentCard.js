import React, { useState } from "react";

const CommentCard = ({
  body,
  username,
  votes,
  created_at,
  comment_id,
  removeComment,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    removeComment(comment_id);
  };
  return isDeleting ? (
    <li>
      <p>Deleting...</p>
    </li>
  ) : (
    <li>
      <p>{body}</p>
      <h3>author: {username}</h3>
      <h4>votes: {votes}</h4>
      <h4>created_at: {created_at}</h4>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default CommentCard;
