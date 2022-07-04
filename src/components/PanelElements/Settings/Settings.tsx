import React, { FC } from 'react';
import styles from './Settings.module.scss';
import { SettingsItem } from './SettingsItem';
import { dataList } from './data';

export const Settings: FC = () => (
  <div className={styles.wrapper}>
    <h1>Settings</h1>
    <div className={styles.item}>
      {dataList.map(item => (
        <SettingsItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);
