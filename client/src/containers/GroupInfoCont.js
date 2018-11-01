import React from 'react';
import { connect } from 'react-redux';

import GroupInfo from '../components/GroupInfo';
import { deleteGroup } from '../actions/action';

const GroupInfoCont = ({ groups, match, onDeleteGroup }) => {
  return (
    <div>
      {groups.map((group) => {
        if (group._id === match.params.id) {
          return (
            <GroupInfo
              key={group._id}
              group={group}
              groupName={group.groupName}
              id={group._id}
              onDeleteGroup={onDeleteGroup}
            />
          );
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  groups: state.groups.groups,
});

const mapDispatchToProps = dispatch => ({
  onDeleteGroup: (id) => {
    dispatch(deleteGroup(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupInfoCont);
