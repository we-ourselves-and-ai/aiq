import { FC } from 'react';
import { PostsListProps } from '../model/posts.types.ts';
import { useAtomValue } from '@dacorm/dotai';
import { $posts } from '../model/postsStore.ts';
import { Card } from '@aiq/uikit';
import './PostsList.css';

export const PostsList: FC<PostsListProps> = () => {
  const posts = useAtomValue($posts);

  return (
    <div className="blog__posts-wrapper">
      {posts &&
        posts.map(post => (
          <Card
            key={post.title}
            imageLink={post.image}
            title={post.title}
            description={post.text.slice(0, 15)}
            name={post.userName}
          />
        ))}
    </div>
  );
};
