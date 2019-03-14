import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUserOperations }  from './duck';
import { groupOperations } from '../Group/duck';
import AddUserComponent from './AddUserComponent';

class AddUserContainer extends Component {
  componentDidMount() {
    const { getGroup } = this.props;

    getGroup();
  }

  render() { 
    const { group, onAddUser } = this.props;

    return (
      <AddUserComponent
        group={group}
        onAddUser={onAddUser}
      />
    );
  }
}

const mapStateToProps = state => ({
  group: state.group.groups,
});

const mapDispatchToProps = dispatch => ({
  onAddUser: (user) => {
    dispatch(addUserOperations.addUser(user));
  },
  getGroup: () => {
    dispatch(groupOperations.getAllGroup());
  },
});

AddUserContainer.propTypes = {
  // eslint-disable-next-line react/require-default-props
  group: PropTypes.arrayOf(PropTypes.object),
  onAddUser: PropTypes.func,
  getGroup: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUserContainer);
