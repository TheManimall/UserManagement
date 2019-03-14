import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class UserComponent extends Component {
  render() {
    const {
      firstName, lastName, id, onDeleteUser, i,
    } = this.props;
    return (
      <Card className="user-card">
        <div className="user-number">
          <h4>{i}</h4>
        </div>
        <div className="user-info">
          <h3>{firstName}</h3>
          <h3>{lastName}</h3>
        </div>
        <div className="user-button">
          <Link to={`/user/${id}`}>
            <Button variant="contained" size="small">Open</Button>
          </Link>
          <IconButton
            aria-label="Delete"
            size="small"
            onClick={() => onDeleteUser(id)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </Card>
    );
  }
}

UserComponent.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  i: PropTypes.number,
  id: PropTypes.string,
  onDeleteUser: PropTypes.func,
};

export default UserComponent;
