import { makeRequest } from '../lib/fetcher.ts';
import { PostType } from '../../features/posts/model/posts.types.ts';

const POSTS_API_URL = 'https://64bd87cb2320b36433c7bfba.mockapi.io/posts';
export function fetchPosts() {
  return makeRequest<PostType[]>(POSTS_API_URL);
}

export function fetchPost(id: string) {
  return makeRequest<PostType[]>(`${POSTS_API_URL}/${id}`);
}
