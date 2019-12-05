import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

const OfficialCard = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{this.props.official.name}</Card.Header>
        {/* <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description> */}
      </Card.Content>
    </Card>
  );
};

export default OfficialCard;
