import React, { useState } from "react";
import { vote } from "../api";

const Voter = ({ votes, article_id, comment_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleVote = (change) => {
    setVoteChange(voteChange + change);
    if (article_id !== undefined) vote({ article_id, change });
    if (comment_id !== undefined) vote({ comment_id, change });
  };
  return (
    <div>
      <button onClick={() => handleVote(1)} disabled={voteChange === 1}>
        Up
      </button>
      <p>Votes: {votes + voteChange}</p>
      <button onClick={() => handleVote(-1)} disabled={voteChange === -1}>
        Down
      </button>
    </div>
  );
};

export default Voter;
