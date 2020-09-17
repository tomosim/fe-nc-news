import React, { useState, useEffect } from "react";
import { postNewArticle, fetchTopics } from "../api";
import { navigate } from "@reach/router";

const PostArticle = () => {
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
    postNewArticle({ ...newArticle, author: "jessjelly" }).then(
      (article_id) => {
        console.log(article_id);
        navigate(`/articles/${article_id}`);
      }
    );
  };
  return (
    <div>
      <h1>Post a new article</h1>
      {isPosting ? (
        <p>Posting article...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              onChange={handleChange}
              value={newArticle.title}
              id="title"
            ></input>
          </label>
          <label>
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
          <label>
            Body:
            <input
              type="text"
              onChange={handleChange}
              value={newArticle.body}
              id="body"
            ></input>
          </label>
          <button>Post</button>
        </form>
      )}
    </div>
  );
};

export default PostArticle;
