import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { PATH } from '../../../constants/route';
import dashboard from '../../../assets/images/menu/navbar/dashboard.svg';
import users from '../../../assets/images/menu/navbar/users.svg';
import settings from '../../../assets/images/menu/navbar/settings.svg';
import folder from '../../../assets/images/menu/navbar/folder.svg';
import vacationManager from '../../../assets/images/menu/navbar/vacation-manager.svg';

export const Navbar: FC = () => (
  <div className={styles.wrapper}>
    <NavLink
      className={navData => (navData.isActive ? styles.activeLink : styles.link)}
      to={PATH.DASHBOARD}
    >
      <div className={styles.navWrapper}>
        <img className={styles.img} src={dashboard} alt="Dashboard" />
        <h4>Dashboard</h4>
      </div>
    </NavLink>

    <NavLink
      className={navData => (navData.isActive ? styles.activeLink : styles.link)}
      to={PATH.USERS}
    >
      <div className={styles.navWrapper}>
        <img className={styles.img} src={users} alt="Users" />
        <h4>Users</h4>
      </div>
    </NavLink>

    <NavLink
      className={navData => (navData.isActive ? styles.activeLink : styles.link)}
      to={PATH.SETTINGS}
    >
      <div className={styles.navWrapper}>
        <img className={styles.img} src={settings} alt="Settings" />
        <h4>Settings</h4>
      </div>
    </NavLink>

    <NavLink
      className={navData => (navData.isActive ? styles.activeLink : styles.link)}
      to={PATH.P_AND_L}
    >
      <div className={styles.navWrapper}>
        <img className={styles.img} src={folder} alt="P&L" />
        <h4>P&L</h4>
      </div>
    </NavLink>

    <NavLink
      className={navData => (navData.isActive ? styles.activeLink : styles.link)}
      to={PATH.VACATION_MANAGER}
    >
      <div className={styles.navWrapper}>
        <img className={styles.img} src={vacationManager} alt="Vacation Manager" />
        <h4>Vacation Manager</h4>
      </div>
    </NavLink>
  </div>
);
