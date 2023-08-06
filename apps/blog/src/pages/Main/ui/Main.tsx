import { Link } from '../../../shared/link/ui/Link.tsx';
import { ThemeChanger } from '../../../features/ThemeChanger';
import { MainProps } from '../model/types.ts';
import { FC } from 'react';

export const Main: FC<MainProps> = () => (
    <div>
        main route
        <Link to={'profile'}>go to profile</Link>
        <Link to={'login'}>go to login</Link>
        <ThemeChanger />
    </div>
);
