import React, { useState } from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import styles from "../styles/comment-card.module.css";
import formatTime from "../utils/format-time";

const CommentCard = ({
  body,
  username,
  votes,
  created_at,
  comment_id,
  removeComment,
  loggedInUser,
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
    <li className={styles.card}>
      <div className={styles.info}>
        <h3>
          <Link to={`/user/${username}`} className={styles.author}>
            {username}
          </Link>
        </h3>
        <h3>{formatTime(new Date(created_at))}</h3>
      </div>
      <p className={styles.body}>{body}</p>
      <Voter votes={votes} comment_id={comment_id} />
      {loggedInUser === username && (
        <button onClick={handleDelete}>Delete</button>
      )}
    </li>
  );
};

export default CommentCard;
