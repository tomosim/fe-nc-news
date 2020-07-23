import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://toms-nc-news-be.herokuapp.com/api/articles")
    .then(({ data }) => data.articles);
};
