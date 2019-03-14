import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class UserInfoComponent extends Component {
  render() {
    const { firstName, lastName, onDeleteUser, id } = this.props;

    return (
      <div className="user">
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
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

UserInfoComponent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  onDeleteUser: PropTypes.func,
  id: PropTypes.string,
};

export default UserInfoComponent;
