import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userOperations } from './duck';
import UserComponent from './UserComponent';
import Search from '../Search/Search';
import { searchActions } from '../Search/duck';

class UserContainer extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { user, onDeleteUser, searchUser } = this.props;
    let i = 0;
    return (
      <div className="container">
        <Search 
          searchUser = { searchUser }
        />
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
    dispatch(userOperations.getUsersData());
  },
  onDeleteUser: (id) => {
    dispatch(userOperations.deleteUser(id));
  },
  searchUser: (el) => {
    dispatch(searchActions.searchUser(el));
  },
});

const mapStateToProps = state => ({
  user: state.user.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
