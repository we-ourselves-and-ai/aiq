import { atom } from '@dacorm/dotai';
import { fetchPosts } from '../../../shared/services/PostsApi.ts';

let posts;

try {
  posts = await fetchPosts();
} catch (e) {
  console.warn(e);
}

export const $posts = atom(posts);
