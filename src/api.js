import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://toms-nc-news-be.herokuapp.com/api/articles")
    .then(({ data }) => data.articles);
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://toms-nc-news-be.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => data.article);
};
