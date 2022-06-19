import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend-social-media-pfe.herokuapp.com/api/v1/auth',
    headers: {
      'content-type': 'application/json',
    },
});

export const login = (email, password) =>
  instance({
    method: 'POST',
    url: '/login',
    data: {
        email: email,
        password: password
    },
    transformResponse: [
      function (res) {
        return JSON.parse(res);
      },
    ],
  });


export const register = (name, username, email, password) =>
  instance({
    method: 'POST',
    url: '/register',
    data: {
        name: name,
        username: username,
        email: email,
        password: password
    },
    transformResponse: [
      function (res) {
        return JSON.parse(res);
      },
    ],
  });