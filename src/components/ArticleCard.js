import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";
import styles from "../styles/article-card.module.css";
import formatTime from "../utils/format-time";

const ArticleCard = ({
  article: { article_id, title, author, topic, votes, created_at, body },
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.header}>
        <Voter votes={votes} article_id={article_id} />
        <Link to={`/articles/${article_id}`} className={styles.title}>
          <h2>{title}</h2>
        </Link>
        <Link to={`/${topic}/articles`} className={styles.topic}>
          {topic}
        </Link>
      </div>
      <div className={styles.info}>
        <h3>
          <Link to={`/user/${author}`} className={styles.author}>
            {author}
          </Link>
        </h3>
        <h3>
          <i>{formatTime(new Date(created_at))}</i>
        </h3>
      </div>
      <div className={styles.preview}>
        <p>{body.slice(0, 100)}...</p>
        <Link to={`/articles/${article_id}`} className={styles.button}>
          read more
        </Link>
      </div>
    </li>
  );
};

export default ArticleCard;
