import React, { useState } from "react";
import { vote } from "../api";

const Voter = ({ votes, article_id }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleVote = (change) => {
    setVoteChange(voteChange + change);
    vote(article_id, change);
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
