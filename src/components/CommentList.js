import React, { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("comments refetching");
    fetchCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return isLoading ? (
    <p>"Loading comments"</p>
  ) : (
    <ul>
      {comments.map((comment) => {
        return <CommentCard {...comment} key={comment.comment_id} />;
      })}
    </ul>
  );
};

export default CommentList;
