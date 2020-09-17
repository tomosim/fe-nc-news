import React from "react";
import ArticleList from "../components/ArticleList";

const UserPage = ({ username }) => {
  return (
    <div>
      <h1>{username}</h1>
      <h2>{`${username}'s articles`}</h2>
      <ArticleList user={username} />
    </div>
  );
};

export default UserPage;
