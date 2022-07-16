import React, { FC } from 'react';
import { Checkbox } from '../../../../common';
import styles from './Days.module.scss';

export const Days: FC = () => (
  <div className={styles.days}>
    <div className={styles.line}>
      <Checkbox text="Sunday" />
      <Checkbox text="Monday" />
      <Checkbox text="Tuesday" />
    </div>
    <div className={styles.line}>
      <Checkbox text="Wednesday" />
      <Checkbox text="Thursday" />
      <Checkbox text="Friday" />
    </div>
    <div className={styles.line}>
      <Checkbox text="Saturday" />
    </div>
  </div>
);
