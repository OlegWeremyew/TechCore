import { CardsItemType } from '../CardsItem/types';
import image1 from '../../../../assets/images/main/cards/image1.svg';
import imageBS from '../../../../assets/images/main/cards/imageBS.svg';
import image2 from '../../../../assets/images/main/cards/image2.svg';
import image3 from '../../../../assets/images/main/cards/image3.svg';
import imageHM from '../../../../assets/images/main/cards/imageHM.svg';

export const cardsList: CardsItemType[] = [
  {
    id: '1',
    title: 'Australia',
    status: true,
    holidays: 'View Holidays',
    policies: 'View Leave Policies',
    friends: [image1, imageBS, image2, image1, image3, imageHM, image2],
    fullList: 6,
  },
  {
    id: '2',
    title: 'Belarus',
    status: false,
    holidays: 'View Holidays',
    policies: 'View Leave Policies',
    friends: [image1, imageBS, image2, image1, imageHM],
    fullList: 0,
  },
  {
    id: '3',
    title: 'USA',
    status: false,
    holidays: 'View Holidays',
    policies: 'View Leave Policies',
    friends: [image1, imageBS, image2, image1, image3, imageHM],
    fullList: 76,
  },
];
