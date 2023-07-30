import { FC } from 'react';
import { FormProps } from '../model/types.ts';
import { Input } from '@aiq/uikit';

export const Form: FC<FormProps> = () => {
  return (
    <div>
      <Input labelText="label" />
    </div>
  );
};
