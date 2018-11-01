import React, { Component } from 'react';
import { connect } from 'react-redux';
import Group from '../components/Group';
import { getGroupsData } from '../actions/action';

class GroupList extends Component {

  componentDidMount() {
    this.props.getGroups();
  }
  
  render() { 
    const { groups } = this.props;
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
    );
  }
}

const mapStateToProps = (state) => ({
  groups: state.groups.groups
});

const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: () => {
      dispatch(getGroupsData());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
