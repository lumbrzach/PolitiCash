import React, { Component } from 'react';
import { Responsive, Grid, Header } from 'semantic-ui-react';
import Democrats from '../components/Democrats';
import Republicans from '../components/Republicans';
import Libertarians from '../components/Libertarians';
const RESULTS_URL = 'http://localhost:3000/api/v1/results';

class DataContainer extends Component {
  constructor() {
    super();
    this.state = {
      electedOfficials: null,
      contributions: null,
      libCandidate: null
    };
  }

  componentDidMount() {
    fetch(RESULTS_URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          electedOfficials: data.data.officials,
          contributions: data.data.results
        });
      })
      .then(this.getLibertarian())
      .catch(err => {
        console.log(err);
      });
  }

  getDemocrat = () => {
    if (this.state.electedOfficials)
      return this.state.electedOfficials.filter(official =>
        official['party'].includes('Democratic')
      );
  };

  getRepublican = () => {
    if (this.state.electedOfficials)
      return this.state.electedOfficials.filter(official =>
        official['party'].includes('Republican')
      );
  };

  getLibertarian = () => {
    if (this.state.electedOfficials)
      return this.state.electedOfficials.filter(official =>
        official['party'].includes('Libertarian')
      );
  };

  getContribData = () => {
    if (this.state.contributions) return this.state.contributions;
  };

  render() {
    return (
      <Responsive
        as={Grid}
        centered
        stackable
        columns={3}
        style={{ padding: '2rem' }}
      >
        <Grid.Row>
          <Header>2014 Georgia Senate Race</Header>
        </Grid.Row>
        <Grid.Column textAlign="center">
          <Democrats
            democrat={this.getDemocrat()}
            data={this.getContribData()}
          />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Libertarians
            lib={this.getLibertarian()}
            data={this.getContribData()}
          />
        </Grid.Column>
        <Grid.Column textAlign="center">
          <Republicans
            rep={this.getRepublican()}
            data={this.getContribData()}
          />
        </Grid.Column>
      </Responsive>
    );
  }
}

export default DataContainer;
