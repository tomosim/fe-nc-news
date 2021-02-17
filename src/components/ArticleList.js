import React, { useState, useEffect } from "react";
import { fetchArticles } from "../api";

import ArticleCard from "./ArticleCard";
import Sorter from "./Sorter";
import ErrorMsg from "./ErrorMsg";

const ArticleList = ({ topic, user }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles({ topic, author: user })
      .then((articles) => {
        setIsLoading(false);
        setArticles(articles);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        setError({ msg: response.data.msg, status: response.status });
      });
  }, [topic, user]);

  if (isLoading === true) return <p>Loading</p>;
  if (error !== null) return <ErrorMsg error={error} />;
  return (
    <>
      <Sorter setArticles={setArticles} />
      <ul>
        {articles.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </>
  );
};

export default ArticleList;
