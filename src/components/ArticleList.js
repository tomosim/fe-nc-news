import React, { useState, useEffect } from "react";
import { fetchArticles } from "../api";

import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  });

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <ul>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </ul>
  );
};

export default ArticleList;
