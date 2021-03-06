import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import GroupComponent from './GroupComponent';
import Search from '../Search/Search';
import { groupOperations } from './duck';
import { searchActions } from '../Search/duck';

class GroupContainer extends Component {
  componentDidMount() {
    const { getGroups } = this.props;

    getGroups();
  };

  render() {
    const { groups, onDeleteGroup, searchGroup, searchGroups, isSearch } = this.props;
    let i = 0;
    let j = 0;

    const main = groups.map((el) => {
      i += 1;
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
    });

    const search = searchGroups.map((el) => {
      j += 1;
      return (
        <GroupComponent
          i={j}
          group={el}
          key={el._id}
          groupName={el.groupName}
          id={el._id}
          onDeleteGroup={onDeleteGroup}
        />
      );
    });

    return (
      <div className="container">
        <Search 
          searchGroup={searchGroup}
        />
        {isSearch ? search : main }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  groups: state.group.groups,
  isSearch: state.group.isSearch,
  searchGroups: state.group.searchGroups,
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

GroupContainer.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object),
  isSearch: PropTypes.bool,
  searchGroups: PropTypes.arrayOf(PropTypes.object),
  getGroups: PropTypes.func.isRequired,
  onDeleteGroup: PropTypes.func,
  searchGroup: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);
