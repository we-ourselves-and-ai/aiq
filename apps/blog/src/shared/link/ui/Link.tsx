import { FC, PropsWithChildren } from 'react';
import { LinkProps } from '../model/types.ts';
import { openPage } from '@dacorm/dotai-router';
import { $router } from '../../router';
import './Link.css';

export const Link: FC<PropsWithChildren<LinkProps>> = ({ children, to }) => {
  return (
    <span className="blog__link" onClick={() => openPage($router, to, null)}>
      {children}
    </span>
  );
};
