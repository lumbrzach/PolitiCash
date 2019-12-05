import React from 'react';
import './App.css';
import Banner from './components/Banner';
import DataContainer from './containers/DataContainer';

const App = () => {
  return (
    <div>
      <Banner />
      <DataContainer />
    </div>
  );
};

export default App;
