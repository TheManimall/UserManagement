import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import { deleteUser, getUserInfo } from '../actions/action';
import UserInfoComponent from './UserInfoComponent';
import GroupListComponent from './GroupListComponent';


class UserInfoContainer extends Component {
  componentDidMount() {
    const { match, getUser,} = this.props;

    getUser(match.params.id);
  }

  render() {
    const { user, onDeleteUser, group } = this.props;
    return (
      <div className="container">
        <Card className="add-user">
          <UserInfoComponent
            firstName={user.firstName}
            lastName={user.lastName}
            id={user._id}
            onDeleteUser={onDeleteUser}
          />
          <div className="group-list">
            {group.map((el) => {
              return (
                <GroupListComponent 
                  key={el._id}
                  id={el._id}
                  groupName={el.groupName}
                />
              )
            })}
          </div>
        </Card>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoContainer);
