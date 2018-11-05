import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class GroupInfo extends Component {
  render() { 
    const { groupName, id, onDeleteGroup } = this.props;
    return (
      <div className='group-info-component'>
        <h2>{groupName}</h2>
        <Link to={'/groups'}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onDeleteGroup(id)}
          >
            Delete
      </Button>
        </Link>
      </div>
    );
  }
}


export default GroupInfo;