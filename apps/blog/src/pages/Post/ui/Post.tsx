import { FC } from 'react';
import { PostProps } from '../model/Post.types.ts';
import { useGetPostInfo } from '../model/useGetPostInfo.tsx';
import { formatDate } from '../../../shared';
import './Post.css';
import Avatar from '../../../shared/assets/avatar.svg';
import { Button } from '@aiq/uikit';

export const Post: FC<PostProps> = ({}) => {
  const { post } = useGetPostInfo();

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog__post-container">
      <Button onClick={() => history.back()} variant={'small'}>
        ⟵
      </Button>
      <div className="blog__post-wrapper">
        <img src={Avatar} alt="аватарка пользователя" />
        <p>{post.userName}</p>
      </div>
      <h1>{post.title}</h1>
      <p>{formatDate(post.createdAt)}</p>
      <p>{post.text}</p>
    </div>
  );
};
