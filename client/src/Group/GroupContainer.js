import React, { Component } from 'react';
import { connect } from 'react-redux';

import GroupComponent from './GroupComponent';
import Search from '../Search/Search';
import { groupOperations } from './duck';
import { searchActions } from '../Search/duck';

class GroupContainer extends Component {
  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    const { groups, onDeleteGroup, searchGroup } = this.props;
    let i = 0;
    return (
      <div className="container">
        <Search 
          searchGroup={searchGroup}
        />
        {groups.map((el) => {
          i++;
          return (
            <GroupComponent
              i={i}
              group={el}
              key={el._id}
              groupName={el.groupName}
              id={el._id}
              onDeleteGroup={onDeleteGroup}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.group.groups,
});

const mapDispatchToProps = dispatch => ({
  getGroups: () => {
    dispatch(groupOperations.getAllGroup());
  },
  onDeleteGroup: (id) => {
    dispatch(groupOperations.deleteGroup(id));
  },
  searchGroup: (el) => {
    dispatch(searchActions.searchGroup(el));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);
