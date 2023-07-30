import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonVariants = 'small' | 'medium' | 'large';

export type Classes = {
  [key in ButtonVariants]: string;
};

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant: ButtonVariants;
}
