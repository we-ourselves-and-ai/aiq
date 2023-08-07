import { FC } from 'react';
import { InputProps } from './Input.types';
import './Input.css';
import SearchIcon from './search.svg';

export const Input: FC<InputProps> = ({
  withLabel = false,
  showIcon = true,
  labelText,
  placeholder,
  ...rest
}) => {
  if (withLabel) {
    return (
      <div className="aiq__input-wrapper">
        {showIcon && <SearchIcon />}
        <input
          placeholder={placeholder}
          className="aiq__input_with-label"
          {...rest}
        ></input>
      </div>
    );
  }

  return (
    <fieldset className="aiq__fieldset">
      <legend className="aiq__legend">{labelText || ''}</legend>
      <input placeholder={placeholder} className="aiq__input" {...rest}></input>
    </fieldset>
  );
};
