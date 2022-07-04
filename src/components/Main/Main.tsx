import React, { FC } from 'react';
import styles from './Main.module.scss';
import { Breadcrumbs } from './Breadcrumbs';
import { Locations } from './Locations';
import { Cards } from './Cards';

export const Main: FC = () => (
  <div className={styles.wrapper}>
    <Breadcrumbs />
    <Locations />
    <Cards />
  </div>
);
