import { FC, PropsWithChildren } from 'react';
import { ButtonProps, Classes } from './Button.types';
import './Button.css';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'medium',
  ...rest
}) => {
  const classes: Classes = {
    small: 'aiq__button aiq__small__button',
    medium: 'aiq__button aiq__medium__button',
    large: 'aiq__button aiq__large__button',
  };

  return (
    <button className={classes[variant]} {...rest}>
      {children}
    </button>
  );
};
