import React, { FC } from 'react';
import logo from '../../../assets/images/menu/logo.svg';
import styles from './Logo.module.scss';

export const Logo: FC = () => (
  <div className={styles.wrapper}>
    <img className={styles.img} src={logo} alt="logo" />
  </div>
);
