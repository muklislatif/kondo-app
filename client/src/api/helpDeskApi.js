import http from 'axios'
const api = process.env.REACT_APP_URL_API;

export default {
  getAllHelpDesks: () => {
    return http.get(`${api}/dummyApi/helpDesks.json`).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}
