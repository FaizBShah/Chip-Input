import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ChipProps as Props } from './Chip.types';
import './Chip.scss';

const Chip: FC<Props> = ({ user, onClear }) => {
  return (
    <div className="chip">
      <img className="chip-img" src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <FaTimes className="chip-cancel-btn" onClick={() => onClear(user)} />
    </div>
  );
};

export default Chip;
