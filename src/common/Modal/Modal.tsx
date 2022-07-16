import React, { FC } from 'react';

import styles from './Modal.module.scss';
import { ModalPropsType } from './types';

export const Modal: FC<ModalPropsType> = ({ show, closeModal, title, children }) => {
  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.dialog}>
        <div className={styles.inner}>
          <h3>{title}</h3>
        </div>
        <div className={styles.content}>{children}</div>
        <button type="button" className={styles.close} onClick={closeModal}>
          ⨯
        </button>
      </div>
    </div>
  );
};
