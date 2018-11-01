import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const UserInfo = ({ user: { firstName, lastName, _id, createdAt, groupId }, onDeleteUser }) => (     
  <div>
    <h3>{firstName}</h3>
    <h3>{lastName}</h3>
    <h3>{createdAt}</h3>
    <ul>{groupId.map(el => <li key={el}>{el}</li>)}</ul>
    <Link to={'/users'}>
      <Button 
        variant="outlined" 
        color="secondary"
        onClick={() => onDeleteUser(_id )}
      >
        Delete
      </Button>
    </Link>
  </div>
);

export default UserInfo;