import { FC, PropsWithChildren } from 'react';

interface TypographyProps {}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({ children }) => {
  return <p>{children}</p>;
};
