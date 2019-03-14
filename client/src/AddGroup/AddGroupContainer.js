import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

const mapDispatchToProps = dispatch => ({
  onAddGroup: (group) => {
    dispatch(addGroupOperations.addGroup(group));
  },
});

AddGroupContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  onAddGroup: PropTypes.func,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddGroupContainer);
