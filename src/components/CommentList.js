import React, { useState, useEffect } from "react";
import { fetchCommentsByArticleId, postComment, deleteComment } from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    console.log("comments refetching");
    fetchCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setCommentsLoading(false);
    });
  }, [article_id]);

  const addComment = (comment) => {
    setPosting(true);
    postComment(article_id, comment).then((comment) => {
      setComments([comment, ...comments]);
      setPosting(false);
    });
  };

  const removeComment = (comment_id) => {
    return deleteComment(comment_id)
      .then(() => {
        setComments(
          comments.filter((comment) => comment.comment_id !== comment_id)
        );
      })
      .catch(console.log);
  };

  return commentsLoading ? (
    <p>"Loading comments"</p>
  ) : (
    <>
      <CommentAdder addComment={addComment} />
      <ul>
        {posting && <li>posting...</li>}
        {comments.map((comment) => {
          return (
            <CommentCard
              {...comment}
              key={comment.comment_id}
              removeComment={removeComment}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CommentList;
