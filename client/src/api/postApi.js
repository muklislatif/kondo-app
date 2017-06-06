import http from 'axios';

const api = process.env.REACT_APP_URL_API;

export default {
  getAllPosts: () => (
    http.get(`${api}/dummyApi/posts.json`)
      .then(response => response.data)
      .catch(error => error)
  ),
};
