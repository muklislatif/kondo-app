import http from 'axios'
const api = process.env.REACT_APP_URL_API;

export default {
  getAllPosts: () => {
    return http.get(`${api}/dummyApi/posts.json`).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}
