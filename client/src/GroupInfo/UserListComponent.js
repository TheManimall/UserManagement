import React, { Component } from 'react';
import Clear from '@material-ui/icons/Clear';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

class UserListComponent extends Component {
  render() {
    const { fullName, id, remove, removeUser } = this.props; 
    return (
      <div className="info-list">
        <Link to={`/user/${id}`}>
          <p>{fullName}</p>
        </Link>
          <Clear 
            onClick={() => removeUser(remove(id))}
          />
      </div>
    );
  }
}
 
export default UserListComponent;