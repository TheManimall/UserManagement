import React from 'react';
import { connect } from 'react-redux';

import GroupInfo from '../components/GroupInfo';

const GroupInfoCont = ({ groups, match }) => {
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

/** const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: id => {
      dispatch(deleteUser(`/user/${id}`));
    }
  };
};**/

export default connect(mapStateToProps, null)(GroupInfoCont);
