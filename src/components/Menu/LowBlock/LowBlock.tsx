import React, { FC } from 'react';
import styles from './LowBlock.module.scss';

import jsLogo from '../../../assets/images/menu/lowLogo.svg';
import notficationsEmpty from '../../../assets/images/menu/notfications-empty.svg';

export const LowBlock: FC = () => (
  <div className={styles.wrapper}>
    <img className={styles.img_bell} src={notficationsEmpty} alt="js logo" />
    <img className={styles.img_logo} src={jsLogo} alt="js logo" />
  </div>
);
