import { createRouter } from '@dacorm/dotai-router';

export const $router = createRouter(
  {
    home: '/',
    profile: '/profile',
    login: '/signin',
    register: '/signup',
  },
  window.history,
);
