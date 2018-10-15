import React, { Component } from 'react';
import { Card, CardSection, Field, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {}
  render() {
    return (
      <Card>
        <CardSection>
          <Field
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={() => onEmailChange()}
          />
        </CardSection>

        <CardSection>
          <Field secureTextEntry label="Password" placeholder="password" />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
