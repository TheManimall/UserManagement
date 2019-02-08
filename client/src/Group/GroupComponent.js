import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class GroupComponent extends Component {
  render() {
    const { groupName, id, onDeleteGroup, i } = this.props;
    return (
      <Card className="user-card">
        <div className="user-number">
          <h4>{i}</h4>
        </div>
        <div className="user-info">
          <h2>{groupName}</h2>
        </div>
        <div className="user-button">
          <Link to={`/group/${id}`}>
            <Button variant="contained" size="small">Open</Button>
          </Link>
          <IconButton
            aria-label="Delete"
            size="small"
            onClick={() => onDeleteGroup(id)}
          >
            <DeleteIcon />
          </IconButton>
          </div>
      </Card>
    );
  }
}

export default GroupComponent;