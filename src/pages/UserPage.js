import React from "react";
import ArticleList from "../components/ArticleList";

const UserPage = ({ username }) => {
  return (
    <div>
      <h1 className="header">{`${username}'s articles`}</h1>
      <ArticleList user={username} />
    </div>
  );
};

export default UserPage;
