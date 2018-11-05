import React, { Component } from 'react';
import { connect } from 'react-redux';

import GroupComponent from './GroupComponent';
import { getAllGroup, deleteGroup } from '../actions/action';

class GroupContainer extends Component {
  componentDidMount() {
    this.props.getGroups();
  }

  render() {
    const { group, onDeleteGroup } = this.props;
    let i = 0;
    return (
      <div className="container">
        {group.map((el) => {
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
  group: state.getAllGroup.group,
});

const mapDispatchToProps = dispatch => ({
  getGroups: () => {
    dispatch(getAllGroup());
  },
  onDeleteGroup: (id) => {
    dispatch(deleteGroup(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);
