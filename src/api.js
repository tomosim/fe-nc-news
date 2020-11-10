import axios from "axios";

export const fetchArticles = ({ topic, author, sort_by, order }) => {
  return axios
    .get("https://toms-nc-news-be.herokuapp.com/api/articles", {
      params: { topic, author, sort_by, order },
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

export const postNewArticle = (newArticle) => {
  return axios
    .post("https://toms-nc-news-be.herokuapp.com/api/articles", newArticle)
    .then(({ data }) => data.article.article_id);
};

export const deleteArticle = (article_id) => {
  return axios.delete(
    `https://toms-nc-news-be.herokuapp.com/api/articles/${article_id}`
  );
};

export const postComment = (article_id, comment) => {
  return axios
    .post(
      `https://toms-nc-news-be.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => data.comment);
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://toms-nc-news-be.herokuapp.com/api/comments/${comment_id}`
  );
};

export const fetchTopics = () => {
  return axios
    .get("https://toms-nc-news-be.herokuapp.com/api/topics")
    .then(({ data }) => data.topics);
};

export const vote = ({ comment_id, article_id, change }) => {
  let URL;
  if (comment_id !== undefined)
    URL = `https://toms-nc-news-be.herokuapp.com/api/comments/${comment_id}`;
  if (article_id !== undefined)
    URL = `https://toms-nc-news-be.herokuapp.com/api/articles/${article_id}`;
  return axios.patch(URL, { inc_votes: change });
};
