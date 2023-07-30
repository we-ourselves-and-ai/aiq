import { FC } from 'react';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = ({ labelText, ...rest }) => {
  return (
    <fieldset>
      <legend>{labelText || ''}</legend>
      <input {...rest}></input>
    </fieldset>
  );
};
