import React, { Component } from 'react';
import './App.css';
import { Responsive, Container, Grid } from 'semantic-ui-react';
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
