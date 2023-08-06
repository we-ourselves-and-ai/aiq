import { atom } from '@dacorm/dotai';
import { fetchPosts } from '../../../shared/services/PostsApi.ts';

export const $posts = atom(
  fetchPosts()
    .then(res => res)
    .catch(e => console.warn(e)),
);
