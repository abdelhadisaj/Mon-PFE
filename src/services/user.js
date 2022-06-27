import instance from './api';

export const modifyUser = (userId, data) =>
  instance({
    method: 'PUT',
    url: '/users/'+ userId,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: data,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const deleteUser = (userId) =>
  instance({
    method: 'DELETE',
    url: '/users/'+ userId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getUser = (userId) =>
  instance({
    method: 'GET',
    url: '/users/'+ userId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getCurrentUser = () =>
  instance({
    method: 'GET',
    url: '/users/'+ sessionStorage.getItem('currentUser'),
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getFollowings = () =>
  instance({
    method: 'GET',
    url: '/users/followings',
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getFollowers = () =>
  instance({
    method: 'GET',
    url: '/users/followers',
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const followUser = (userId) =>
  instance({
    method: 'PUT',
    url: '/users/follow/' + userId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const unfollowUser = (userId) =>
  instance({
    method: 'PUT',
    url: '/users/unfollow/' + userId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });