import { EMPLOYEES_FETCH_SUCCESS } from '../actions/types';

import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log(action);
      return action.payload;
    //   return { ...state, employees: action.payload };

    // case EMPLOYEE_CREATE: {
    //   return { ...state, employees: { ...state.employees, ...action.payload } };
    // }

    //   return { ...state, [id]: action.payload };

    default:
      return state;
  }
};
