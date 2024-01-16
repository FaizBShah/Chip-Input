import { useState, FC } from 'react';
import './ChipInput.scss';
import { ChipInputProps as Props } from './ChipInput.types';
import Chip from '../Chip/Chip';
import { User } from '../../data/users';

const ChipInput: FC<Props> = ({ placeholder, data }) => {
  const [value, setValue] = useState<string>('');
  const [chips, setChips] = useState<User[]>([]);
  const [dropdownData, setDropdownData] = useState<User[]>(data);

  const onSelectItem = (item: User): void => {
    setChips([...chips, item]);
    setDropdownData(dropdownData.filter(data => data.email !== item.email));
  };

  const onClearChip = (item: User): void => {
    setDropdownData([...dropdownData, item]);
    setChips(chips.filter(chip => chip.name !== item.name));
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onSelectItem(dropdownData[0]);
      setValue('');
    }
  };

  return (
    <div className="chip-input-container">
      {chips.map((user, index) => (
        <Chip key={index} user={user} onClear={onClearChip} />
      ))}
      <input className="chip-input" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} onKeyDown={onInputKeyDown} />
    </div>
  );
};

export default ChipInput;
