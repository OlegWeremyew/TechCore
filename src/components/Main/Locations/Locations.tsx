import React, { FC } from 'react';
import styles from './Locations.module.scss';

export const Locations: FC = () => (
  <div className={styles.wrapper}>
    <h2>Locations</h2>
    <p>
      Create new users or update the existng users. You can then set their permissons here
      too.
    </p>
  </div>
);
