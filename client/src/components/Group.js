import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default ({ group: { groupName, _id }}) => {
  return (
    <Card className='card'>
      <h2>{groupName}</h2>
      <h4>{_id}</h4>
      <Link to={`/group/${_id}`}>
        <Button variant="contained">Show more</Button>
      </Link>
    </Card>
  );
};
