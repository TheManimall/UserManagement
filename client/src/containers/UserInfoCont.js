import React from 'react';
import { connect } from 'react-redux';

import UserInfo from '../components/UserInfo';

const UserInfoCont = ({ users, match }) => {
  return(
    <div>
      {users.map((user) => {
        if (user._id === match.params.id) {
          return(
            <UserInfo 
              key = {user._id}
              user = {user}
              firstName = {user.firstName}
              lastName = {user.lastName}
            />
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users.users
});

/** const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: id => {
      dispatch(deleteUser(`/user/${id}`));
    }
  };
};**/

export default connect(mapStateToProps, null)(UserInfoCont);
