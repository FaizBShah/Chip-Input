import { FC } from 'react';
import './Dropdown.scss';
import { DropdownProps as Props } from './Dropdown.types';

const Dropdown: FC<Props> = ({ data, onSelect, activeDropdownIndex }) => {
  return (
    <div className="dashboard-container">
      {data.map((user, index) => (
        <div key={index} className="dashboard-row" onClick={() => onSelect(user)} style={activeDropdownIndex === index ? { background: '#dfdfdf' } : {}}>
          <img className="dashboard-row-img" src={user.image} alt={user.name} />
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
