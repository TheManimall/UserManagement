import React from 'react';
import { connect } from 'react-redux';

import UserInfo from '../components/UserInfo';

const UserInfoCont = ({ users, params }) => {
  return(
    <div>
      {users.filter((user) => {
        if (user._id === params.get('id')){
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

export default connect(mapStateToProps, null)(UserInfo);
