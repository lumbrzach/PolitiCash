import React from 'react';
import { Segment, Header, List, Divider } from 'semantic-ui-react';
import OfficialCard from './OfficialCard';

const Republicans = props => {
  if (props.rep === undefined) {
    return null;
  }
  return (
    <Segment inverted color={'red'} style={{ height: '30rem' }}>
      <Header as={'h1'}>Republican Candidate</Header>
      <Divider />
      <Header as={'h2'} style={{ color: 'black' }}>
        {props.rep[0].name}
      </Header>
      <Divider />
      <Header as={'h3'}>Campaign Contributions (USD)</Header>
      <List>
        <List.Item>
          <List.Header>Aggregate Total</List.Header>
          <List.Content>{props.data.republican.aggregate}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Average Contibution</List.Header>
          <List.Content>{props.data.republican.average}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Minimum Contribution</List.Header>
          <List.Content>{props.data.republican.min}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Maximum Contributions</List.Header>
          <List.Content>{props.data.republican.max}</List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};

export default Republicans;
