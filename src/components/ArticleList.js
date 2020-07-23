import React, { useState, useEffect } from "react";
import { fetchArticles } from "../api";

import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  });

  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </ul>
  );
};

export default ArticleList;
