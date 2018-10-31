import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/action';
import NewUser from '../components/NewUser';

class AddUserCont extends Component {
  render() { 
    return (
      <NewUser />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (user) => {
      dispatch(addUser(user));
    }
  }
};

export default connect (
  null,
  mapDispatchToProps
)(NewUser);