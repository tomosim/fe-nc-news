import React, { useState } from "react";

import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([
    {
      article_id: 33,
      title: "Seafood substitutions are increasing",
      body:
        "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.",
      author: "weegembump",
      topic: "cooking",
      votes: 0,
      created_at: "2018-05-30T15:59:13.341Z",
      comment_count: "6",
    },
    {
      article_id: 28,
      title: "High Altitude Cooking",
      body:
        "Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.",
      author: "happyamy2016",
      topic: "cooking",
      votes: 0,
      created_at: "2018-05-27T03:32:28.514Z",
      comment_count: "5",
    },
  ]);
  return (
    <ul>
      {articles.map((article) => {
        return <ArticleCard article={article} />;
      })}
    </ul>
  );
};

export default ArticleList;
