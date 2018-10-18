import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      // Actions.pop(): it returns to the previous scene(=navigate to employeeList) and prevents double scene stacking behavior.
      .then(() => {
        // let user = {
        //   name: name,
        //   phone: phone,
        //   shift: shift
        // };

        // dispatch({ type: EMPLOYEE_CREATE, payload: user });
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

// asyncronous actions
export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      // snapshot: object that describes what data is in there
      .on('value', (snapshot) => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      // update the info
      .set({ name, phone, shift })
      .then(() => console.log('saved!'));
  };
};
