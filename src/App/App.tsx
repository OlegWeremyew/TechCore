import React, { FC } from 'react';
import styles from './App.module.scss';
import { Menu } from '../components/Menu';
import { PanelElements } from '../components/PanelElements';
import { Main } from '../components/Main';

export const App: FC = () => (
  <div className={styles.wrapper}>
    <Menu />
    <PanelElements />
    <Main />
  </div>
);
