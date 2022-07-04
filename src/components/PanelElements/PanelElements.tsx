import React, { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PATH } from '../../constants/route';
import { Dashboard } from './Dashboard';
import { Users } from './Users';
import { Settings } from './Settings';
import { PAndL } from './P_AND_L';
import { VacationManager } from './VacationManager';
import styles from './PanelElements.module.scss';

export const PanelElements: FC = () => (
  <div className={styles.wrapper}>
    <Routes>
      <Route path={PATH.DASHBOARD} element={<Dashboard />} />
      <Route path={PATH.USERS} element={<Users />} />
      <Route path={PATH.SETTINGS} element={<Settings />} />
      <Route path={PATH.P_AND_L} element={<PAndL />} />
      <Route path={PATH.VACATION_MANAGER} element={<VacationManager />} />
      <Route path={PATH.START_MENU} element={<Navigate to={PATH.SETTINGS} />} />
    </Routes>
  </div>
);
