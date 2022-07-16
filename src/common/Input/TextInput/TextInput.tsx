import React, { FC } from 'react';
import { TextInputType } from './types';
import styles from './TextInput.module.scss';

export const TextInput: FC<TextInputType> = ({ placeholder }) => (
  <input className={styles.textInput} type="text" placeholder={placeholder} />
);
