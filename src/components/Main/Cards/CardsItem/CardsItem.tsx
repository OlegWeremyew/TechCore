import React, { FC } from 'react';
import styles from './CardsItem.module.scss';
import { CardsItemType } from './types';

export const CardsItem: FC<CardsItemType> = ({
  title,
  status,
  holidays,
  Policies,
  friends,
  fullList,
}) => (
  <div className={styles.wrapper}>
    <div>
      <h4>{title}</h4>
      {status && <button type="button">default</button>}
    </div>
    <div>
      <div>
        <span>Holidays</span> <span>{holidays}</span>
      </div>
      <div>
        <span>Leave Policies</span> <span>{Policies}</span>
      </div>
    </div>
    <div>
      <div>
        {friends.map(friend => (
          <img key={friend} src={friend} alt="friend" />
        ))}
      </div>
      <div>{fullList}</div>
    </div>
  </div>
);
