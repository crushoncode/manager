import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      // make new objects and take all of the properties of my existing state objects and throw them into the object
      // define the property of email and give it the value of action.payload
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
