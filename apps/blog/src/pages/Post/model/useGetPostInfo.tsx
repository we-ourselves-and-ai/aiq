import { atom, useAtom } from '@dacorm/dotai';
import { $id } from './identificator.ts';
import { useEffect } from 'react';
import { fetchPost } from '../../../shared/services/PostsApi.ts';
import { PostType } from '../../../features/posts/model/posts.types.ts';

const $post = atom<PostType | null>(null);

export const useGetPostInfo = () => {
  const [id, setId] = useAtom($id);
  const [post, setPost] = useAtom($post);

  useEffect(() => {
    if (!window.history.state) {
      return;
    }

    setId(window.history.state);

    const getPost = async () => {
      const data = await fetchPost(window.history.state);
      return data;
    };
    const response = getPost().then(res => res);
    setPost(response);
  }, []);

  return {
    post,
    id,
  };
};
