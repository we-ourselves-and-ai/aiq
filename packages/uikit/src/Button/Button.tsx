import { forwardRef, PropsWithChildren } from 'react';
import { ButtonProps, Classes } from './Button.types';
import './Button.css';

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  ({ children, variant = 'medium', ...rest }, ref) => {
    const classes: Classes = {
      small: 'aiq__button aiq__button_small',
      medium: 'aiq__button aiq__button_medium',
      large: 'aiq__button aiq__button_large',
    };

    return (
      <button ref={ref} className={classes[variant]} {...rest}>
        {children}
      </button>
    );
  },
);
