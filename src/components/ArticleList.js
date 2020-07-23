import React, { useState, useEffect } from "react";
import axios from "axios";

import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://toms-nc-news-be.herokuapp.com/api/articles")
      .then(({ data }) => {
        console.log(data);
        setArticles(data.articles);
      });
  });

  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </ul>
  );
};

export default ArticleList;
