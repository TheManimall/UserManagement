import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
  render() {
    const { firstName, lastName, createdAt, groupId, onDeleteUser, id } = this.props; 
    return (
      <div>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h3>{createdAt}</h3>
        <Link to={'/users'}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onDeleteUser(id)}
          >
            Delete
      </Button>
        </Link>
      </div>
    );
  }
}
 
export default UserInfo;
