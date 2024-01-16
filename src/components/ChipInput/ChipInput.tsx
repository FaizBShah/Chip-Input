import { FC } from 'react';
import './ChipInput.scss';
import { ChipInputProps as Props } from './ChipInput.types';

const ChipInput: FC<Props> = ({ placeholder }) => {
  return (
    <div className="chip-input-container">
      <input className="chip-input" placeholder={placeholder} />
    </div>
  );
};

export default ChipInput;
