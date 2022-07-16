import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './CardsItem.module.scss';
import { CardsItemType, PopupClick } from './types';
import edit from '../../../../assets/images/main/cards/contextMenu/edit.svg';
import star from '../../../../assets/images/main/cards/contextMenu/star.svg';
import remove from '../../../../assets/images/main/cards/contextMenu/remove.svg';

export const CardsItem: FC<CardsItemType> = ({
  title,
  status,
  holidays,
  policies,
  friends,
  fullList,
}) => {
  const [isVisibility, setIsVisibility] = useState<boolean>(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const changeVisibility = (): void => {
    setIsVisibility(!isVisibility);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const newEvent = event as PopupClick;

      if (sortRef.current && !newEvent.path.includes(sortRef.current)) {
        setIsVisibility(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.innerBlock}>
          <h4>{title}</h4>
          {status ? (
            <button type="button">default</button>
          ) : (
            <div ref={sortRef} onClick={changeVisibility} className={styles.menu}>
              <div className={styles.block}>
                <div className={styles.circle} />
                <div className={styles.circle} />
                <div className={styles.circle} />
              </div>
            </div>
          )}
        </div>
        <div>
          <div className={styles.info}>
            <span className={styles.text}>Holidays</span>{' '}
            <span className={styles.value}>{holidays}</span>
          </div>
          <div className={styles.info}>
            <span className={styles.text}>Leave Policies</span>{' '}
            <span className={styles.value}>{policies}</span>
          </div>
        </div>
        <div className={styles.friends}>
          {friends.map((friend, index) => (
            <img className={styles.img} key={index} src={friend} alt="friend" />
          ))}
          {fullList > 0 && <div className={styles.num}>+{fullList}</div>}
        </div>
      </div>

      {/* Выпадающее меню */}
      {isVisibility && (
        <div className={styles.contextMenu}>
          <div className={styles.settings}>
            <div className={styles.option} onClick={changeVisibility}>
              <img src={edit} alt="edit" /> <p>Edit</p>
            </div>
            <div className={styles.option} onClick={changeVisibility}>
              <img src={star} alt="star" /> <p>Set as Default</p>
            </div>
            <div className={styles.option} onClick={changeVisibility}>
              <img src={remove} alt="remove" /> <p>Delete</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
