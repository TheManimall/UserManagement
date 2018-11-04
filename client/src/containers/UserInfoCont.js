import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteUser, getUserInfo } from '../actions/action';
import UserInfo from '../components/UserInfo';


class UserInfoCont extends Component {
  componentDidMount() {
    const { match, getUser,} = this.props;

    getUser(match.params.id);
  }

  render() {
    const { user, onDeleteUser, group } = this.props;
    return (
      <React.Fragment>
        <UserInfo
          firstName={user.firstName}
          lastName={user.lastName}
          id={user._id}
          onDeleteUser={onDeleteUser}
        />
        {group.map((el) => {
          return(
            <h2 key={el._id}>{el.groupName}</h2>
          )
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userInfo.user,
  group: state.userInfo.group, 
});

const mapDispatchToProps = dispatch => ({
  onDeleteUser: (id) => {
    dispatch(deleteUser(id));
  },
  getUser: (id) => {
    dispatch(getUserInfo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoCont);
