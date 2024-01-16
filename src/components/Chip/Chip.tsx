import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ChipProps as Props } from './Chip.types';
import './Chip.scss';

const Chip: FC<Props> = ({ user, onClear, isHighlighted }) => {
  return (
    <div className="chip" style={{ border: isHighlighted ? '1px blue solid' : 'none' }}>
      <img className="chip-img" src={user.image} alt={user.name} />
      <p>{user.name}</p>
      <FaTimes className="chip-cancel-btn" onClick={() => onClear(user)} />
    </div>
  );
};

export default Chip;
