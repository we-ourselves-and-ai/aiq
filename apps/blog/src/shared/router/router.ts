import { createRouter } from '@dacorm/dotai-router';

export const $router = createRouter(
  {
    home: '/',
    profile: '/profile',
  },
  window.history,
);
