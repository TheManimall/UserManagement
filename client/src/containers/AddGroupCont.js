import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroup } from '../actions/action';
import NewGroup from '../components/NewGroup';

class AddGroupCont extends Component {
  render() {
    return (
      <NewGroup />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddGroup: (group) => {
      dispatch(addGroup(group));
    }
  }
};

export default connect(
  null,
  mapDispatchToProps
)(NewGroup);