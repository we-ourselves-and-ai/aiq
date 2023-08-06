import { Link } from '../../../shared/link/ui/Link.tsx';
import { ThemeChanger } from '../../../features/ThemeChanger';
import { MainProps } from '../model/types.ts';
import { FC } from 'react';
import { PostsList } from '../../../features/posts';

export const Main: FC<MainProps> = () => {
  return (
    <div>
      <PostsList />
      <Link to={'profile'}>go to profile</Link>
      <Link to={'login'}>go to login</Link>
      <ThemeChanger />
    </div>
  );
};
