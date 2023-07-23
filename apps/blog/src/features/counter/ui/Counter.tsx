import { FC } from 'react';
import { atom, useAtom } from '@dacorm/dotai';
import reactLogo from '../../../shared/assets/react.svg';
import { Typography } from '@aiq/uikit';

interface CounterProps {}

const value = atom(0);

export const Counter: FC<CounterProps> = () => {
  const [count, setCount] = useAtom(value);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Typography>Vite + React</Typography>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};
