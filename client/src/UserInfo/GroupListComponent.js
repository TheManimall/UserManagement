import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class GroupListComponent extends Component {
  render() {
    const { groupName, id } = this.props;
     
    return (
      <Link to={`/group/${id}`}>
        <div className="info-list">
          <p>{groupName}</p>
        </div>
      </Link>
    );
  }
}

GroupListComponent.propTypes = {
  groupName: PropTypes.string,
  id: PropTypes.string,
};

export default GroupListComponent;
