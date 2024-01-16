import { useState, useEffect, FC } from 'react';
import './ChipInput.scss';
import { ChipInputProps as Props } from './ChipInput.types';
import Chip from '../Chip';
import { User } from '../../data/users';
import Dropdown from '../Dropdown';

const ChipInput: FC<Props> = ({ placeholder, data }) => {
  const [value, setValue] = useState<string>('');
  const [chips, setChips] = useState<User[]>([]);
  const [dropdownData, setDropdownData] = useState<User[]>(data);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('mousedown', () => setIsDropdownVisible(false));
  }, []);

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
      <div className="chip-input-wrapper">
        <input className="chip-input" placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} onKeyDown={onInputKeyDown} />
        {isDropdownVisible && (
          <div className="dropdown-wrapper">
            <Dropdown data={dropdownData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChipInput;
