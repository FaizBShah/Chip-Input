import { User } from '../../data/users';

export type ChipProps = {
  user: User;
  onClear: (item: User) => void;
};
