import React from "react";
import ArticleList from "../components/ArticleList";

const ArticlesByTopic = ({ topic }) => {
  return (
    <div>
      <h1>Articles related to {topic}</h1>
      <ArticleList topic={topic} />
    </div>
  );
};

export default ArticlesByTopic;
