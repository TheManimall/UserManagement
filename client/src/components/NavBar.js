import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <Link to='/users'>
        <Button variant="contained" size="large">Show all users</Button>
      </Link>
      <Link to='/add-user'>
        <Button variant="contained" color="primary" size="large">Create user</Button>
      </Link>
      <Link to='/groups'>
        <Button variant="contained" size="large">Show all groups</Button>
      </Link>
      <Link to='/add-group'>
        <Button variant="contained" color="primary" size="large">Create group</Button>
      </Link>
    </React.Fragment>
  );
};

export default NavBar;
