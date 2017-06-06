import http from 'axios';

const api = process.env.REACT_APP_URL_API;

export default {
  getAllHelpDesks: () => (
    http.get(`${api}/dummyApi/helpDesks.json`)
      .then(response => response.data)
      .catch(error => error)
  ),
};
