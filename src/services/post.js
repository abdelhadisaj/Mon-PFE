import instance from './api';

export const createPost = (data) =>
  instance({
    method: 'POST',
    url: '/posts/',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: data,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const likePost = (postId) =>
  instance({
    method: 'PUT',
    url: 'posts/like/'+ postId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const commentPost = (postId, comment) =>
  instance({
    method: 'PUT',
    url: '/posts/comment/'+ postId,
    data: {
        comment: comment,
    },
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const updatePost = (postId, desc) =>
  instance({
    method: 'PUT',
    url: '/posts/' + postId,
    data: {
        desc: desc,
    },
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const deletePost = (postId) =>
  instance({
    method: 'DELETE',
    url: '/posts/' + postId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getCurrentUserTimeline = (postsNo=100, pageNo=0) =>
  instance({
    method: 'GET',
    url: '/posts/timeline?postsNo='+postsNo+'&pageNo='+pageNo,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getPersonalProfileTimeline = (username, postsNo=100, pageNo=0) =>
  instance({
    method: 'GET',
    url: '/posts/profile/'+username+'?postsNo='+postsNo+'&pageNo='+pageNo,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getPost = (postId) =>
  instance({
    method: 'GET',
    url: '/posts/'+ postId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });
