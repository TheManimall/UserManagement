import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addGroupOperations } from './duck';
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

console.log(addGroupOperations);


const mapDispatchToProps = dispatch => ({
  onAddGroup: (group) => {
    dispatch(addGroupOperations.addGroup(group));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AddGroupContainer);
