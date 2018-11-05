import React from 'react';
import Group from '@material-ui/icons/Group';
import GroupAdd from '@material-ui/icons/GroupAdd';
import Person from '@material-ui/icons/Person';
import PersonAdd from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
        <Link to="/users">
          <Person />
          Show users
        </Link>
        <Link to="/add-user">
          <PersonAdd />
          Create user
        </Link>

        <Link to="/groups">
          <Group />
          Show groups
        </Link>
        <Link to="/add-group">
          <GroupAdd />
          Create group
        </Link>
    </div>
  );
};

export default NavBar;
