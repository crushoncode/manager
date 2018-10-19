import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);
    const config = {
      apiKey: 'AIzaSyA3Yv0301OIDHe-Ti_JMuQWOEB1dhgCnso',
      authDomain: 'manager-29a0c.firebaseapp.com',
      databaseURL: 'https://manager-29a0c.firebaseio.com',
      projectId: 'manager-29a0c',
      storageBucket: 'manager-29a0c.appspot.com',
      messagingSenderId: '525338883201'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
