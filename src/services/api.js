import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-social-media-pfe.herokuapp.com/api/v1',
  headers: {
    'content-type': 'application/json',
  },
});

instance.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
