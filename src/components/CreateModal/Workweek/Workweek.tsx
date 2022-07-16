import React, { FC } from 'react';
import styles from './Workweek.module.scss';
import { Days } from './Days';

export const Workweek: FC = () => (
  <div className={styles.wrapper}>
    <p className={styles.inner}>
      Workweek<span>*</span>
    </p>
    <Days />
  </div>
);
