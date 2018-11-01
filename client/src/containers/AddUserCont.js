import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions/action';
import NewUser from '../components/NewUser';

class AddUserCont extends Component {
  render() { 
    const { groups } = this.props;
    return (
      <NewUser
        groups={groups} 
      />
    );
  }
}

const mapStateToProps = state => ({
  groups: state.groups.groups
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddUser: (user) => {
      dispatch(addUser(user));
    }
  }
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(NewUser);