import React, { FC, useState } from 'react';
import styles from './SuperInput.module.scss';
import { InputType } from './types';

export const SuperInput: FC<InputType> = ({ type, placeholder, id, text, errorText }) => {
  const [status, setStatus] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getLabelStyle = (): string => {
    if (error) return `${styles.input__label} ${styles.error__label}`;
    if (check) return `${styles.input__label} ${styles.check__label}`;
    if (status) return `${styles.input__label} ${styles.active__label}`;
    return `${styles.input__label}`;
  };

  const getInputStyle = (): string => {
    if (error) return `${styles.input__main} ${styles.error__input}`;
    if (check) return `${styles.input__main} ${styles.check__input}`;
    return `${styles.input__main} ${styles.input__input}`;
  };

  const changeCheckVisibility = (e: string): void => {
    if (e.trim().length <= 2) {
      setCheck(false);
      setError(errorText);
    }
    if (e.trim().length > 2) {
      setStatus(true);
      setError('');
    }
    if (e.trim().length > 7) {
      setCheck(true);
      setError('');
    }
  };

  const labelStyle = getLabelStyle();
  const inputStyle = getInputStyle();

  return (
    <div className={styles.inputWrapper}>
      <>
        <label className={labelStyle} htmlFor={id}>
          {text}
        </label>
        <input
          onChange={e => changeCheckVisibility(e.currentTarget.value)}
          onClick={() => setStatus(true)}
          onBlur={() => setStatus(false)}
          className={inputStyle}
          type={type}
          placeholder={placeholder}
          id={id}
        />
      </>
      {error && <div className={styles.error__text}>{error}</div>}
    </div>
  );
};
