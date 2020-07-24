import React, { useState, useEffect } from "react";
import { fetchArticleById } from "../api";

const SingleArticle = ({ article_id }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });
  });

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <h2>Comments</h2>
      blah blah blah
    </div>
  );
};

export default SingleArticle;
