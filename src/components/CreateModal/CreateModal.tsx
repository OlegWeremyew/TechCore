import React, { FC } from 'react';
import styles from './CreateModal.module.scss';
import { Info, TextInput } from '../../common';
import { Workweek } from './Workweek';
import { SuperInput } from '../../common/Input/SuperInput';

export const CreateModal: FC = () => (
  <div className={styles.wrapper}>
    <TextInput placeholder="Location Name" />
    <Workweek />
    <div>
      <SuperInput
        type="text"
        placeholder="Accounting year"
        id="LeaveQuotaResetBasedOn"
        text="Leave Quota Reset Based On"
        errorText="Error"
      />
      <Info text="This setting will determine if your leave balance will be reset based on the accounting year (company's fiscal year) or based on the employee's start date. Besides quotas, your roll-over policy will also be affected according to this setting." />
    </div>
  </div>
);
