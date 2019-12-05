import React from 'react';
import { Header } from 'semantic-ui-react';

const Banner = () => {
  // const styles = {
  //   "h1": {

  //   }
  // }
  return (
    <div>
      <Header as="h1" textAlign="center" style={{ paddingTop: '3rem' }}>
        PolitiCash
      </Header>
      <Header as="h3" textAlign="center">
        THE PLACE FOR CAMPAIGN CONTRIBUTION INFORMATION
      </Header>
    </div>
  );
};

export default Banner;
