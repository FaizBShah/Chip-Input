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
  const [dropdownData, setDropdownData] = useState<User[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [highlightedChip, setHighlightedChip] = useState<number>(-1);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number>(0);

  const onSelectItem = (item: User): void => {
    setChips([...chips, item]);
    setUnselectedData(unselectedData.filter(data => data.email !== item.email));
    setIsDropdownVisible(false);
    setActiveDropdownIndex(0);
    setValue('');
    setHighlightedChip(-1);
  };

  const onClearChip = (item: User): void => {
    setUnselectedData([...unselectedData, item]);
    setChips(chips.filter(chip => chip.name !== item.name));
    setHighlightedChip(-1);
  };

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && value.length > 0 && dropdownData.length > 0) {
      onSelectItem(dropdownData[activeDropdownIndex]);
      setValue('');
    } else if (e.key === 'Backspace' && value.length === 0) {
      if (highlightedChip === -1) {
        setHighlightedChip(chips.length - 1);
      } else {
        onClearChip(chips[chips.length - 1]);
        setHighlightedChip(-1);
      }
    } else if (e.key === 'ArrowUp' && dropdownData.length > 0) {
      setActiveDropdownIndex(activeDropdownIndex === 0 ? dropdownData.length - 1 : activeDropdownIndex - 1);
    } else if (e.key === 'ArrowDown' && dropdownData.length > 0) {
      setActiveDropdownIndex(activeDropdownIndex === dropdownData.length - 1 ? 0 : activeDropdownIndex + 1);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
    setDropdownData(unselectedData.filter(data => data.name.toLowerCase().startsWith(e.target.value.toLowerCase())));
    setIsDropdownVisible(e?.target?.value?.length > 0 && unselectedData.filter(data => data.name.toLowerCase().startsWith(e.target.value.toLowerCase())).length > 0);
    setHighlightedChip(-1);
  };

  return (
    <div className="chip-input-container">
      {chips.map((user, index) => (
        <Chip key={index} user={user} onClear={onClearChip} isHighlighted={index === highlightedChip} />
      ))}
      <div className="chip-input-wrapper">
        <input className="chip-input" placeholder={placeholder} value={value} onChange={onInputChange} onKeyDown={onInputKeyDown} />
        {isDropdownVisible && (
          <div className="dropdown-wrapper">
            <Dropdown data={dropdownData} onSelect={onSelectItem} activeDropdownIndex={activeDropdownIndex} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChipInput;
