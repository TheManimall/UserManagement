import React, { Component } from 'react';
import { connect } from 'react-redux';

import GroupInfo from '../components/GroupInfo';
import AddUserToGroup from '../components/AddUserToGroup';
import { deleteGroup, getGroupInfo, addUserToGroup, removeUserFromGroup } from '../actions/action';

class GroupInfoCont extends Component {
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
      <React.Fragment>
        <GroupInfo
          groupName={group.groupName}
          id={group._id}
          onDeleteGroup={onDeleteGroup}
        />
        {userInGroup.map(el => (
          <div>
            <h2 key={el._id}>{`${el.firstName} ${el.lastName}`}</h2>
            <button
              key={el._id}
              onClick={() => removeUser(remove(el._id))}
            >
              del
            </button>
          </div>
        ))}
        <AddUserToGroup
          user={user}
          onAddUserToGroup={onAddUserToGroup}
          id={group._id}
        />
      </React.Fragment>
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
    dispatch(deleteGroup(id));
  },
  getGroup: (id) => {
    dispatch(getGroupInfo(id));
  },
  onAddUserToGroup: (id) => {
    dispatch(addUserToGroup(id));
  },
  removeUser: (id) => {
    dispatch(removeUserFromGroup(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupInfoCont);
