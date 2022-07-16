import React, { FC } from 'react';

import styles from './Modal.module.scss';
import { ModalButtonsWrapPropsType } from './types';

import { Button } from '../Button';

export const ModalButtonsWrap: FC<ModalButtonsWrapPropsType> = ({
  closeModal,
  children,
}) => (
  <div className={styles.modalButtons}>
    <Button onClick={closeModal} className="modal">
      Cancel
    </Button>
    {children}
  </div>
);
