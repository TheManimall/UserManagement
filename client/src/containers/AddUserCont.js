import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser, getAllGroup } from '../actions/action';
import NewUser from '../components/NewUser';

class AddUserCont extends Component {
  componentDidMount() {
    const { getGroup } = this.props;

    getGroup();
  }

  render() { 
    const { group, onAddUser } = this.props;

    return (
      <NewUser
        group={group}
        onAddUser={onAddUser} 
      />
    );
  }
}

const mapStateToProps = state => ({
  group: state.getAllGroup.group
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (user) => {
      dispatch(addUser(user));
    },
    getGroup: () => {
      dispatch(getAllGroup());
    },
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(AddUserCont);