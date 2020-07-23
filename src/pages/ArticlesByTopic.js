import React from "react";

const ArticlesByTopic = ({ topic }) => {
  return (
    <div>
      <h1>Articles related to {topic}</h1>
      <ul>
        <li>article 1</li>
        <li>article 2</li>
      </ul>
    </div>
  );
};

export default ArticlesByTopic;
