import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export default ({ user: { firstName, lastName, phone, _id }, onDeleteUser }) => {
  return (
    <Card className='card'>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{phone}</h2>
    </Card>
  );
};
