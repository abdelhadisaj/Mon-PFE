import instance from './api';

export const createConversation = (sender, conversationId, text) =>
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
    url: '/conversations/'+conversationId,
    transformResponse: [
      function (data) {
        return JSON.parse(data);
      },
    ],
  });