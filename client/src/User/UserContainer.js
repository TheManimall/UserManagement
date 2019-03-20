import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userOperations } from './duck';
import UserComponent from './UserComponent';
import Search from '../Search/Search';
import { searchActions } from '../Search/duck';

class UserContainer extends Component {
  componentDidMount() {
    const { getUsers } = this.props;

    getUsers();
  }

  render() {
    const { user, onDeleteUser, searchUser, isSearch, searchUsers } = this.props;
    let i = 0;
    let j = 0;

    const main = user.map((el) => {
      i += 1;
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
    });

    const search = searchUsers.map((el) => {
      // eslint-disable-next-line no-plusplus
      j += 1;
      return (
        <UserComponent
          key={el._id}
          i={j}
          firstName={el.firstName}
          lastName={el.lastName}
          nickname={el.nickName}
          id={el._id}
          onDeleteUser={onDeleteUser}
        />
      );
    }); 

    return (
      <div className="container">
        <Search
          searchUser={searchUser}
        />
        {isSearch ? search : main}
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
  searchUsers: state.user.searchUsers,
  isSearch: state.user.isSearch,
});

UserContainer.propTypes = {
  user: PropTypes.arrayOf(PropTypes.object),
  searchUsers: PropTypes.arrayOf(PropTypes.object),
  isSearch: PropTypes.bool,
  getUsers: PropTypes.func.isRequired,
  onDeleteUser: PropTypes.func,
  searchUser: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
