import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteUser, getUsersData } from '../actions/action';
import UserComponent from './UserComponent';

class UserContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { user, onDeleteUser } = this.props;
    let i = 0;
    return (
      <div className="container">
        {user.map((el) => {
          i++;
          return (
            <UserComponent
              key={el._id}
              i={i}
              firstName={el.firstName}
              lastName={el.lastName}
              nickname={el.nickName}
              id={el._id}
              onDeleteUser={onDeleteUser}
            />
          );
        })
      }
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(getUsersData());
  },
  onDeleteUser: (id) => {
    dispatch(deleteUser(id));
  },
});

const mapStateToProps = state => ({
  user: state.users.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
