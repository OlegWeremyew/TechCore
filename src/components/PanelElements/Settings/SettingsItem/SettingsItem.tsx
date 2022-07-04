import React, { FC, useState } from 'react';
import { SettingsItemType } from './types';
import styles from './SettingsItem.module.scss';
import { EMPTY_STRING } from '../../../../constants/variables';

export const SettingsItem: FC<SettingsItemType> = ({ img, list, title, status }) => {
  const [visibility, setVisibility] = useState<boolean>(status);

  const titleStyled = visibility ? styles.active : EMPTY_STRING;

  const changeVisibility = (): void => {
    setVisibility(!visibility);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.firstRow}>
        <img src={img} alt="icon" />
        <h3 className={titleStyled} onClick={changeVisibility}>
          {title}
        </h3>
      </div>
      {visibility && (
        <ul className={styles.secondRow}>
          {list.map(elem => (
            <li key={elem.id}>{elem.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
