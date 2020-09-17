import React, { useState, useEffect } from "react";
import { fetchArticleById, deleteArticle } from "../api";
import { navigate, Link } from "@reach/router";
import CommentList from "../components/CommentList";

const SingleArticle = ({ article_id }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleClick = () => {
    deleteArticle(article_id).then(() => {
      navigate("/");
    });
  };

  return isLoading ? (
    <p>Loading article</p>
  ) : (
    <div>
      <h1>{article.title}</h1>
      <h2>
        <Link to={`/user/${article.author}`}>{article.author}</Link>
      </h2>
      <p>{article.body}</p>
      <button onClick={handleClick}>Delete Article</button>
      <h2>Comments</h2>
      <CommentList article_id={article_id} />
    </div>
  );
};

export default SingleArticle;
