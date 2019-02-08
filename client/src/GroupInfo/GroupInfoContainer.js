import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';

import GroupInfoComponent from './GroupInfoComponent';
import AddUserToGroup from './AddUserToGroup';
import { groupInfoOperations } from './duck';
import { groupOperations } from '../Group/duck';
import UserListComponent from './UserListComponent';

class GroupInfoContainer extends Component {
  componentDidMount() {
    const { getGroup, match } = this.props;
    const gId = match.params.id;

    getGroup(gId);
  }

  render() {
    const {
      group, user, onDeleteGroup, onAddUserToGroup, userInGroup, removeUser
    } = this.props;

    const remove = (uId) => {
      const userData = {
        userId: uId,
        groupId: group._id,
      };

      return userData;
    };

    return (
      <div className="container">
        <Card className="group-info-page">
          <GroupInfoComponent
            groupName={group.groupName}
            id={group._id}
            onDeleteGroup={onDeleteGroup}
          />
          <AddUserToGroup
            user={user}
            onAddUserToGroup={onAddUserToGroup}
            id={group._id}
          />
          <div className="group-list">
            {userInGroup.map(el => (
              <UserListComponent
                key={el._id}
                fullName={`${el.firstName} ${el.lastName}`}
                id={el._id}
                remove={remove}
                removeUser={removeUser}
              />
            ))}
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  group: state.groupInfo.group,
  user: state.groupInfo.user,
  userInGroup: state.groupInfo.userInGroup,
});

const mapDispatchToProps = dispatch => ({
  onDeleteGroup: (id) => {
    dispatch(groupOperations.deleteGroup(id));
  },
  getGroup: (id) => {
    dispatch(groupInfoOperations.getGroupInfo(id));
  },
  onAddUserToGroup: (id) => {
    dispatch(groupInfoOperations.addUserToGroup(id));
  },
  removeUser: (id) => {
    dispatch(groupInfoOperations.removeUserFromGroup(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupInfoContainer);
