import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  article: {
    article_id,
    title,
    body,
    author,
    topic,
    votes,
    comment_count,
    created_at,
  },
}) => {
  return (
    <li>
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <h3>
        <Link to={`/user/${author}`}>{author}</Link>
      </h3>
      <h4>created: {created_at}</h4>
      <h4>
        <Link to={`/${topic}/articles`}>{topic}</Link>
      </h4>
      <h4>Votes: {votes}</h4>
      <p>{body}</p>
      <h4>{comment_count}</h4>
    </li>
  );
};

export default ArticleCard;
