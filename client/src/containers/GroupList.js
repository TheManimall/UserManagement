import React, { Component } from 'react';
import { connect } from 'react-redux';

import Group from '../components/Group';
import { getAllGroup, deleteGroup } from '../actions/action';

class GroupList extends Component {

  componentDidMount() {
    this.props.getGroups();
  }
  
  render() { 
    const { group, onDeleteGroup } = this.props;
    return ( 
      <div className='container'>
        {group.map((el) => {
          return (
            <Group
              group={el}
              key={el._id}
              groupName={el.groupName}
              _id={el._id}
              onDeleteGroup={onDeleteGroup}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  group: state.getAllGroup.group
});

const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: () => {
      dispatch(getAllGroup());
    },
    onDeleteGroup: (id) => {
      dispatch(deleteGroup(id))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
