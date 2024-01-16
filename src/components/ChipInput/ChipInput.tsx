import { FC } from 'react';
import './ChipInput.scss';
import { ChipInputProps as Props } from './ChipInput.types';
import Chip from '../Chip/Chip';

const ChipInput: FC<Props> = ({ placeholder, data }) => {
  return (
    <div className="chip-input-container">
      {data.slice(0, 9).map((user, index) => (
        <Chip key={index} name={user.name} image={user.image} />
      ))}
      <input className="chip-input" placeholder={placeholder} />
    </div>
  );
};

export default ChipInput;
