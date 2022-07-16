import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonType = DefaultButtonPropsType & {
  red?: boolean;
  light?: boolean;
};
