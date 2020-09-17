import React from "react";
import ArticleList from "../components/ArticleList";

const ProfilePage = ({ username }) => {
  return (
    <div>
      <h1>{username}</h1>
      <h2>{`${username}'s articles`}</h2>
      <ArticleList user={username} />
    </div>
  );
};

export default ProfilePage;
