import React, { useState } from "react";
import { vote } from "../api";
import styles from "../styles/voter.module.css";

const Voter = ({ votes, article_id, comment_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleVote = (change) => {
    setVoteChange(voteChange + change);
    if (article_id !== undefined) vote({ article_id, change });
    if (comment_id !== undefined) vote({ comment_id, change });
  };
  return (
    <div className={styles.layout}>
      <button
        onClick={() => handleVote(1)}
        disabled={voteChange === 1}
        className={styles.up}
      >
        +
      </button>
      <p className={styles.votes}>{votes + voteChange}</p>
      <button
        onClick={() => handleVote(-1)}
        disabled={voteChange === -1}
        className={styles.down}
      >
        -
      </button>
    </div>
  );
};

export default Voter;
