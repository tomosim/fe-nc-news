import React, { useState, useEffect } from "react";
import { fetchCommentsByArticleId, postComment, deleteComment } from "../api";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { Link } from "@reach/router";
import ErrorMsg from "./ErrorMsg";

const CommentList = ({ article_id, loggedInUser }) => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("comments refetching");
    fetchCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setCommentsLoading(false);
      })
      .catch(({ response }) => {
        setCommentsLoading(false);
        setError({ msg: response.data.msg, status: response.status });
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

  if (commentsLoading) return <p>"Loading comments"</p>;
  if (error) return ErrorMsg(error);

  return (
    <>
      {loggedInUser === "" ? (
        <p>
          You must be <Link to="/log-in">logged in</Link> to comment
        </p>
      ) : (
        <CommentAdder addComment={addComment} />
      )}
      <ul>
        {posting && <li>posting...</li>}
        {comments.map((comment) => {
          return (
            <CommentCard
              {...comment}
              key={comment.comment_id}
              removeComment={removeComment}
              loggedInUser={loggedInUser}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CommentList;
