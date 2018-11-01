import React from 'react';
import { connect } from 'react-redux';
//import { deleteUser } from '../actions/action';
import Group from '../components/Group';

const GroupList = ({ groups }) => {
  return (
    <div className='container'>
      {groups.map((group) => {
        return (
          <Group
            group={group}
            key={group._id}
            groupName={group.groupName}
            _id={group._id}
          />
        );
      })}
    </div>
  )
};

/** const mapDispatchToProps = (dispatch) => {
  return {
    routInfoUser: id => {
      dispatch(push(`/user/${id}`));
    };
  };
};**/

const mapStateToProps = (state) => ({
  groups: state.groups.groups
});

export default connect(mapStateToProps, null)(GroupList);
