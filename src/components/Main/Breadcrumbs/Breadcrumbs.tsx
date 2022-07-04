import React, { FC } from 'react';
import styles from './Breadcrumbs.module.scss';
import settings from '../../../assets/images/menu/navbar/settings.svg';
import arrowRight from '../../../assets/images/main/arrowRight.svg';

export const Breadcrumbs: FC = () => (
  <div className={styles.wrapper}>
    <img className={styles.setting_img} src={settings} alt="settings" />
    <span className={styles.text}>Settings</span>
    <img className={styles.arrow_img} src={arrowRight} alt="arrow" />
    <span className={styles.text}>Vacation Manager</span>
  </div>
);
