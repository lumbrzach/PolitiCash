import React from 'react';
import { Segment, Header, List, Divider } from 'semantic-ui-react';

const Libertarians = props => {
  if (props.lib === undefined) {
    return null;
  }
  return (
    <Segment inverted color={'green'} style={{ height: '30rem' }}>
      <Header as={'h1'}>Libertarian Candidate</Header>
      <Divider />
      <Header as={'h2'} style={{ color: 'black' }}>
        {props.lib[0].name}
      </Header>
      <Divider />
      <Header as={'h3'}>Campaign Contributions (USD)</Header>
      <List>
        <List.Item>
          <List.Header>Aggregate Total</List.Header>
          <List.Content>{props.data.libertarian.aggregate}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Average Contibution</List.Header>
          <List.Content>{props.data.libertarian.average}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Minimum Contribution</List.Header>
          <List.Content>{props.data.libertarian.min}</List.Content>
        </List.Item>
        <List.Item>
          <List.Header>Maximum Contributions</List.Header>
          <List.Content>{props.data.libertarian.max}</List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};

export default Libertarians;
