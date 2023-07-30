import { FC, PropsWithChildren } from 'react';
import { ButtonProps, Classes } from './Button.types';
import './Button.css';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'medium',
  ...rest
}) => {
  const classes: Classes = {
    small: 'aiq__button aiq__button_small',
    medium: 'aiq__button aiq__button_medium',
    large: 'aiq__button aiq__button_large',
  };

  return (
    <button className={classes[variant]} {...rest}>
      {children}
    </button>
  );
};
