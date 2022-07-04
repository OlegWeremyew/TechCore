export type SettingsItemType = {
  id: string;
  img: string;
  title: string;
  status: boolean;
  list: ListType[];
};

type ListType = {
  id: string;
  text: string;
};
