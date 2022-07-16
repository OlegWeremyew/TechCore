import React, { FC, useState } from 'react';
import styles from './Info.module.scss';
import info from '../../assets/images/info.svg';
import { InfoType } from './types';

export const Info: FC<InfoType> = ({ text }) => {
  const [visibility, setVisibility] = useState<boolean>(false);

  const changeVisibility = (): void => {
    setVisibility(!visibility);
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.info_img} onClick={changeVisibility} src={info} alt="info" />
      {visibility && (
        <div className={styles.info_text}>
          {text}
          <div className={styles.info_square} />
        </div>
      )}
    </div>
  );
};
