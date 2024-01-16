import { useState, FC } from 'react';
import './ChipInput.scss';
import { ChipInputProps as Props } from './ChipInput.types';
import Chip from '../Chip';
import { User } from '../../data/users';
import Dropdown from '../Dropdown';

const ChipInput: FC<Props> = ({ placeholder, data }) => {
  const [value, setValue] = useState<string>('');
  const [chips, setChips] = useState<User[]>([]);
  const [unselectedData, setUnselectedData] = useState<User[]>(data);
  const [dropdownData, setDropdownData] = useState<User[]>(data);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const onSelectItem = (item: User): void => {
    setChips([...chips, item]);
    setUnselectedData(unselectedData.filter(data => data.email !== item.email));
    setIsDropdownVisible(false);
    setValue('');
  };

  const onClearChip = (item: User): void => {
    setUnselectedData([...unselectedData, item]);
    setChips(chips.filter(chip => chip.name !== item.name));
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onSelectItem(dropdownData[0]);
      setValue('');
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    setDropdownData(unselectedData.filter(data => data.name.startsWith(e.target.value)));
    setIsDropdownVisible(e?.target?.value?.length > 0 && unselectedData.filter(data => data.name.startsWith(e.target.value)).length > 0);
  };

  return (
    <div className="chip-input-container">
      {chips.map((user, index) => (
        <Chip key={index} user={user} onClear={onClearChip} />
      ))}
      <div className="chip-input-wrapper">
        <input className="chip-input" placeholder={placeholder} value={value} onChange={onInputChange} onKeyDown={onInputKeyDown} />
        {isDropdownVisible && (
          <div className="dropdown-wrapper">
            <Dropdown data={dropdownData} onSelect={onSelectItem} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChipInput;
