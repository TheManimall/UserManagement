import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteUser, getUsersData } from '../actions/action';
import User from './User';

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() { 
    const { users, onDeleteUser } = this.props;
    return ( 
      <div className='container'>
        {users.map((user) => {
          return (
            <User
              key={user._id}
              firstName={user.firstName}
              lastName={user.lastName}
              id={user._id}
              onDeleteUser={onDeleteUser}
            />
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsersData());
    },
    onDeleteUser: (id) => {
      dispatch(deleteUser(id));
    },
  }
};

const mapStateToProps = (state) => ({
  users: state.users.users
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
