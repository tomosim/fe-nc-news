import React from "react";
import { Router } from "@reach/router";
import AllArticles from "./pages/AllArticles";
import ArticlesByTopic from "./pages/ArticlesByTopic";
import SingleArticle from "./pages/SingleArticle";
import Navbar from "./components/Navbar";
import PostArticle from "./pages/PostArticle";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <AllArticles path="/" />
        <ArticlesByTopic path="/:topic/articles" />
        <SingleArticle path="/articles/:article_id" />
        <PostArticle path="/new-article" />
        <ProfilePage path="/user/:username" />
      </Router>
    </>
  );
}

export default App;
