import React, { useState, useEffect } from "react";
import { fetchArticleById, deleteArticle } from "../api";
import { navigate, Link } from "@reach/router";
import CommentList from "../components/CommentList";
import Voter from "../components/Voter";
import styles from "../styles/single-article.module.css";
import formatTime from "../utils/format-time";

const SingleArticle = ({ article_id, loggedInUser }) => {
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
    <p className={styles.loading}>Loading article...</p>
  ) : (
    <>
      <div className={styles.header}>
        <h1>{article.title}</h1>
        <div className={styles.info}>
          <h2>
            <Link to={`/user/${article.author}`} className={styles.author}>
              {article.author}
            </Link>
          </h2>
          <h2>{formatTime(new Date(article.created_at))}</h2>
        </div>
      </div>

      <div className={styles.articleContent}>
        <Link to={`/${article.topic}/articles`} className={styles.topic}>
          {article.topic}
        </Link>
        <p className={styles.body}>{article.body}</p>
        <Voter votes={article.votes} article_id={article_id} />
        {loggedInUser === article.author && (
          <button onClick={handleClick}>Delete Article</button>
        )}
      </div>

      <div className={styles.comments}>
        <h2>Comments</h2>
        <CommentList article_id={article_id} loggedInUser={loggedInUser} />
      </div>
    </>
  );
};

export default SingleArticle;
