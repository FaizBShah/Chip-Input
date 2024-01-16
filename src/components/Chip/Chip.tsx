import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import { ChipProps as Props } from './Chip.types';
import './Chip.scss';

const Chip: FC<Props> = ({ name, image }) => {
  return (
    <div className="chip">
      <img className="chip-img" src={image} alt={name} />
      <p>{name}</p>
      <FaTimes className="chip-cancel-btn" />
    </div>
  );
};

export default Chip;
