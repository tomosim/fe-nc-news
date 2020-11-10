import React, { useState } from "react";

import styles from '../styles/forms.module.css'

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
    <form className={`${styles.form} ${styles.horizontal}`} onSubmit={handleSubmit}>
      <label className={styles.label}>
        New comment:
        <input onChange={handleChange} type="text" value={commentBody} />
      </label>
      <button className={styles.button}>Post</button>
    </form>
  );
};

export default CommentAdder;
