import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroup } from '../actions/action';
import AddGroupComponent from './AddGroupComponent';

class AddGroupContainer extends Component {
  render() {
    return (
      <AddGroupComponent />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddGroup: (group) => {
      dispatch(addGroup(group));
    };
  }
};

export default connect(
  null,
  mapDispatchToProps
)(AddGroupComponent);