import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default ({ user: { firstName, lastName, phone, _id }, routInfoUser }) => {
  return (
    <Card className='card'>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{phone}</h2>
      <h4>{_id}</h4>
      <Link to={`/user/${_id}`}>
        <Button variant="contained">Show more</Button>
      </Link>
    </Card>
  );
};
