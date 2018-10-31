import React from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/action';
import User from '../components/User';

const UserList = ({ users }) => {
  return(
    <React.Fragment>
      {users.map((item) => {
        return (
          <User
            key={item._id}
            firstName={item.firstName}
            lastName={item.lastName}
            phone={item.phone}
          />
        );
      })}
    </React.Fragment>
  )
};

const mapStateToProps = (state) => ({
  users: state.users.users
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
