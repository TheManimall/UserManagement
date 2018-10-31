import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { deleteUser } from '../actions/action';
import User from '../components/User';

const UserList = ({ users }) => {
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
            _id={user._id}
          />
        );
      })}
    </div>
  )
};

/** const mapDispatchToProps = (dispatch) => {
  return {
    routInfoUser: id => {
      dispatch(push(`/user/${id}`));
    };
  };
};**/

const mapStateToProps = (state) => ({
  users: state.users.users
});

export default connect(mapStateToProps, null)(UserList);
