import React from "react";
import { Router } from "@reach/router";
import AllArticles from "./pages/AllArticles";
import ArticlesByTopic from "./pages/ArticlesByTopic";
import SingleArticle from "./pages/SingleArticle";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <AllArticles path="/" />
        <ArticlesByTopic path="/:topic/articles" />
        <SingleArticle path="/articles/:article_id" />
      </Router>
    </>
  );
}

export default App;
