import { FC } from 'react';
import './HomePage.scss';
import ChipInput from '../../components/ChipInput';

const HomePage: FC = () => {
  return (
    <>
      <h1 className="header-text">Pick Users</h1>
      <div className="input-container">
        <ChipInput />
      </div>
    </>
  );
};

export default HomePage;
