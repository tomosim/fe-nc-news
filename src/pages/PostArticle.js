import React, { useState, useEffect } from "react";
import { postNewArticle, fetchTopics } from "../api";
import { navigate, Link } from "@reach/router";

import styles from '../styles/forms.module.css'

const PostArticle = ({ loggedInUser }) => {
  const [newArticle, setNewArticle] = useState({
    title: "",
    topic: "loading topics...",
    body: "",
  });
  const [isPosting, setIsPosting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setIsLoading(false);
      setTopics(topics);
    });
  }, []);

  const handleChange = (event) => {
    setNewArticle({ ...newArticle, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosting(true);
    postNewArticle({ ...newArticle, author: loggedInUser }).then(
      (article_id) => {
        console.log(article_id);
        navigate(`/articles/${article_id}`);
      }
    );
  };
  return loggedInUser === "" ? (
    <p className={styles.form}>
      You must be <Link to="/log-in">logged in</Link> to post an article
    </p>
  ) : (
    <div>
      <h1 className="header">Post a new article</h1>
      {isPosting ? (
        <p>Posting article...</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Title:
            <input
              type="text"
              onChange={handleChange}
              value={newArticle.title}
              id="title"
            ></input>
          </label>
          <label className={styles.label}>
            Topic:
            <select onChange={handleChange} value={newArticle.topic} id="topic">
              {isLoading ? (
                <option>Loading topics...</option>
              ) : (
                topics.map((topic) => {
                  return <option>{topic.slug}</option>;
                })
              )}
            </select>
          </label>
          <label className={styles.label}>
            Body:
            <input
              type="text"
              onChange={handleChange}
              value={newArticle.body}
              id="body"
            ></input>
          </label>
          <button className={styles.button}>Post</button>
        </form>
      )}
    </div>
  );
};

export default PostArticle;
