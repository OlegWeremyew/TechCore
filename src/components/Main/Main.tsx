import React, { FC, useState } from 'react';
import styles from './Main.module.scss';
import { Breadcrumbs } from './Breadcrumbs';
import { Locations } from './Locations';
import { Cards } from './Cards';
import { Button, Info } from '../../common';
import { ModalButtonsWrap } from '../../common/Modal/ModalButtonsWrap';
import { Modal } from '../../common/Modal/Modal';
import { CreateModal } from '../CreateModal';

export const Main: FC = () => {
  const [isModalAdd, setIsModalAdd] = useState<boolean>(false);

  const showModal = (): void => setIsModalAdd(true);
  const closeModal = (): void => setIsModalAdd(false);

  return (
    <div className={styles.wrapper}>
      <Breadcrumbs />
      <Locations />
      <Cards />
      <Button
        onClick={showModal}
        style={{ position: 'absolute', top: '54px', right: '40px' }}
        className="default"
      >
        Create Location
      </Button>
      <Info
        text="Each year, the user` s rolled over leaves will expire on the date you set. The quotas for each leave
          type are configured through the Leave Types section for this location and each can be set individually to
          allow or not allow roll overs."
      />
      <Modal show={isModalAdd} closeModal={closeModal} title="Create Location">
        <CreateModal />
        <ModalButtonsWrap closeModal={closeModal}>
          <Button onClick={closeModal}>Save</Button>
        </ModalButtonsWrap>
      </Modal>
    </div>
  );
};
