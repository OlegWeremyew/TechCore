import React, { FC } from 'react';
import styles from './Checkbox.module.scss';
import { CheckboxType } from './types';

export const Checkbox: FC<CheckboxType> = ({ text }) => (
  <div className={styles.checkboxWrapper}>
    <input className={styles.checkbox__input} type="checkbox" id={text} />
    <label className={styles.checkbox__label} htmlFor={text}>
      {text}
    </label>
  </div>
);
