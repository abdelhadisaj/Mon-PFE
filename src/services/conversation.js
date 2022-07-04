import instance from './api';

export const createConversation = (senderId, receiverId) =>
  instance({
    method: 'POST',
    url: '/conversations/',
    data: {
        senderId: senderId,
        receiverId: receiverId
    },
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getCurrentUserConversations = (userId) =>
  instance({
    method: 'GET',
    url: '/conversations/'+userId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getConversation = (userId1, userId2) =>
  instance({
    method: 'GET',
    url: '/conversations/find/'+userId1+'/'+userId2,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });