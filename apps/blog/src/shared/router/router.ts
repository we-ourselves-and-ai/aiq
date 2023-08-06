import { createRouter } from '@dacorm/dotai-router';

export const routes = {
  home: '/',
  profile: '/profile',
  login: '/signin',
  register: '/signup',
  dynamicPost: '/post/:id',
};

export const $router = createRouter(routes, window.history);
