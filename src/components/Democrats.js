import React from 'react';
import { Segment, Header, List, Divider } from 'semantic-ui-react';

const Democrats = props => {
  if (props.democrat === undefined) {
    return null;
  }
  return (
    <Segment inverted color={'blue'} style={{ height: '30rem' }}>
      <Header as={'h1'}>Democratic Candidate</Header>
      <Divider />
      <Header as={'h2'} style={{ color: 'black' }}>
        {props.democrat[0].name}
      </Header>
      <Divider />
      <Header as={'h3'}>Campaign Contributions (USD)</Header>
      <List>
        <List.Item>
          <List.Header>Aggregate Total</List.Header>
          <List.Content>{props.data.democrat.aggregate}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Average Contibution</List.Header>
          <List.Content>{props.data.democrat.average}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Minimum Contribution</List.Header>
          <List.Content>{props.data.democrat.min}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Maximum Contributions</List.Header>
          <List.Content>{props.data.democrat.max}</List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};

export default Democrats;
