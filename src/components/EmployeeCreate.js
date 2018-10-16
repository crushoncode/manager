import React, { Component } from 'react';
import { Card, CardSection, Field, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Field label="Name" placeholder="Jane" />
        </CardSection>

        <CardSection>
          <Field label="Phone" placeholder="555-555-5555" />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
