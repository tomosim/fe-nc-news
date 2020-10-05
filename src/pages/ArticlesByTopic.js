import React from "react";
import ArticleList from "../components/ArticleList";

const ArticlesByTopic = ({ topic }) => {
  return (
    <div>
      <h1 className="header">Articles related to {topic}</h1>
      <ArticleList topic={topic} />
    </div>
  );
};

export default ArticlesByTopic;
