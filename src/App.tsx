import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
