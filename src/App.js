import React, { useState } from "react";
import { Router } from "@reach/router";
import AllArticles from "./pages/AllArticles";
import ArticlesByTopic from "./pages/ArticlesByTopic";
import SingleArticle from "./pages/SingleArticle";
import Navbar from "./components/Navbar";
import PostArticle from "./pages/PostArticle";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  return (
    <>
      <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      <Router>
        <AllArticles path="/" />
        <ArticlesByTopic path="/:topic/articles" />
        <SingleArticle
          path="/articles/:article_id"
          loggedInUser={loggedInUser}
        />
        <PostArticle path="/new-article" loggedInUser={loggedInUser} />
        <UserPage path="/user/:username" />
        <Login path="/log-in" setLoggedInUser={setLoggedInUser} />
      </Router>
    </>
  );
}

export default App;
