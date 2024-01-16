import { FC } from 'react';
import './HomePage.scss';
import ChipInput from '../../components/ChipInput';
import users from '../../data/users';

const HomePage: FC = () => {
  return (
    <>
      <h1 className="header-text">Pick Users</h1>
      <div className="input-wrapper">
        <ChipInput placeholder="Add new user..." data={users} />
      </div>
    </>
  );
};

export default HomePage;
