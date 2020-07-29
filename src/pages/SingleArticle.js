import React, { useState, useEffect } from "react";
import { fetchArticleById } from "../api";
import CommentList from "../components/CommentList";

const SingleArticle = ({ article_id }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <h2>Comments</h2>
      <CommentList article_id={article_id} />
    </div>
  );
};

export default SingleArticle;
