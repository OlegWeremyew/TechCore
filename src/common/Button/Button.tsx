import React, { FC } from 'react';
import styles from './Button.module.scss';
import { ButtonType } from './types';

export const Button: FC<ButtonType> = ({ className, ...restProps }) => {
  const style = className === 'default' ? styles.default : '';
  return <button type="button" className={style} {...restProps} />;
};
