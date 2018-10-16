import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Field, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Field
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={(text) => this.onEmailChange(text)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Field
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={(text) => this.onPasswordChange(text)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onButtonPress()}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
