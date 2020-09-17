import React, { useState, useEffect } from "react";
import { fetchArticles } from "../api";

import ArticleCard from "./ArticleCard";

const ArticleList = ({ topic, user }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles({ topic, author: user }).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [topic, user]);

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
