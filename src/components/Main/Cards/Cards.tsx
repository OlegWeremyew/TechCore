import React, { FC } from 'react';
import styles from './Cards.module.scss';
import { CardsItem } from './CardsItem';
import { cardsList } from './data';

export const Cards: FC = () => (
  <div className={styles.wrapper}>
    {cardsList.map(item => (
      <CardsItem key={item.id} {...item} />
    ))}
  </div>
);
