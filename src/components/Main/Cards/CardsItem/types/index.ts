export type CardsItemType = {
  id: string;
  title: string;
  status: boolean;
  holidays: string;
  policies: string;
  friends: string[];
  fullList: number;
};

export type PopupClick = MouseEvent & {
  path: Node[];
};
