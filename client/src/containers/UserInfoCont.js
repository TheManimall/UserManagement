import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/action';

import UserInfo from '../components/UserInfo';

const UserInfoCont = ({ users, match, onDeleteUser }) => (
  <div>
    {users.map((user) => {
      if (user._id === match.params.id) {
        return (
          <UserInfo
            key={user._id}
            user={user}
            firstName={user.firstName}
            lastName={user.lastName}
            groupId={user.groupId}
            onDeleteUser={onDeleteUser}
          />
        );
      }
    })}
  </div>
);

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
  onDeleteUser: (id) => {
    dispatch(deleteUser(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoCont);
