import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const GroupInfo = ({ group: { groupName, _id, createdAt }, onDeleteGroup }) => (
  <div>
    <h2>{groupName}</h2>
    <h3>{_id}</h3>
    <h3>{createdAt}</h3>
    <Link to={'/groups'}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => onDeleteGroup(_id)}
      >
        Delete
      </Button>
    </Link>
  </div>
);

export default GroupInfo;