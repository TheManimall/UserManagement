import React from 'react';
import { connect } from 'react-redux';

import { deleteUser } from '../actions/action';
import User from '../components/User';

const UserList = ({ users, onDeleteUser }) => {
  return(
    <div className='container'>
      {users.map((user) => {
        return (
          <User
            user = {user}
            key={user._id}
            firstName={user.firstName}
            lastName={user.lastName}
            phone={user.phone}
            onDeleteUser={onDeleteUser}
            _id={user._id}
          />
        );
      })}
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: (id) => {
      dispatch(deleteUser(id));
    }
  }
};

const mapStateToProps = (state) => ({
  users: state.users.users
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
