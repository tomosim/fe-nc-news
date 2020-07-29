import axios from "axios";

export const fetchArticles = (topic) => {
  return axios
    .get("https://toms-nc-news-be.herokuapp.com/api/articles", {
      params: { topic },
    })
    .then(({ data }) => data.articles);
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://toms-nc-news-be.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => data.article);
};

export const fetchCommentsByArticleId = (article_id) => {
  console.log(article_id);
  return axios
    .get(
      `https://toms-nc-news-be.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => data.comments)
    .catch(console.log);
};
