import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

export default GroupListComponent;