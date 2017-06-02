import http from 'axios'
const api = 'http://localhost:8080'

export default {
  getAllPosts: () => {
    return http.get(`${api}/dummyApi/post.json`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
