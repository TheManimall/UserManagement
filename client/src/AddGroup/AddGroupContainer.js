import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGroup } from '../actions/action';
import AddGroupComponent from './AddGroupComponent';

class AddGroupContainer extends Component {
  render() {
    const { onAddGroup } = this.props;
    return (
      <AddGroupComponent
        onAddGroup={onAddGroup}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddGroup: (group) => {
    dispatch(addGroup(group));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AddGroupContainer);
