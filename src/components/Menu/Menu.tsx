import React, { FC } from 'react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { LowBlock } from './LowBlock';
import styles from './Menu.module.scss';

export const Menu: FC = () => (
  <div className={styles.wrapper}>
    <Logo />
    <Navbar />
    <LowBlock />
  </div>
);
