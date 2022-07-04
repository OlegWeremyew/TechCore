import { SettingsItemType } from '../SettingsItem/types';
import general from '../../../../assets/images/panelElements/general.svg';
import booking from '../../../../assets/images/panelElements/booking.svg';

export const dataList: SettingsItemType[] = [
  {
    id: '1',
    img: general,
    title: 'General',
    status: false,
    list: [
      { id: '1.1', text: 'Lorem' },
      { id: '12', text: 'Lorem' },
    ],
  },
  {
    id: '2',
    img: booking,
    title: 'Vacation Manager',
    status: true,
    list: [
      { id: '2.1', text: 'Leave Types' },
      { id: '2.2', text: 'Locations' },
    ],
  },
];
