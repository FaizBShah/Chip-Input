import { User } from '../../data/users';

export type DropdownProps = {
  data: User[];
  onSelect: (item: User) => void;
};
