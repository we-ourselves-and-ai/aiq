import { Link } from '../../../shared/link/ui/Link.tsx';
import { ThemeChanger } from '../../../features/ThemeChanger';
import { MainProps } from '../model/types.ts';
import { FC } from 'react';
import { PostsList } from '../../../features/posts';
import { Header } from '../../../features/header';
import './Main.css';

export const Main: FC<MainProps> = () => {
  return (
    <div className="blog__main">
      <Header />
      <PostsList />
      <Link to={'profile'}>go to profile</Link>
      <Link to={'login'}>go to login</Link>
      <ThemeChanger />
    </div>
  );
};
