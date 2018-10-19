import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
// import { ListView } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    // call an action creator (asynchronous request)
    // load employees
    this.props.employeesFetch();
  }

  renderItem({ item }) {
    return <ListItem employee={item} />;
  }

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        extraData={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={(employee) => employee.id}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // val = user model(name/phone/shift properties), uid = user id, id of the records
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
