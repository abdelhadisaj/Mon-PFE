import instance from './api';

export const createMessage = (sender, conversationId, text) =>
  instance({
    method: 'POST',
    url: '/messages/',
    data: {
        conversationId: conversationId,
        sender: sender,
        text: text
    },
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });

export const getConversationMessages = (conversationId) =>
  instance({
    method: 'GET',
    url: '/messages/'+conversationId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });