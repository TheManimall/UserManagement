import React from 'react';
import { Route, Switch } from 'react-router';

import UsersList from '../containers/UserList';
import NavBar from '../components/NavBar';
import AddUser from '../containers/AddUserCont';;

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={NavBar} />
      <Route path="/users" component={UsersList} />
      <Route path="/add-user" component={AddUser} />
    </Switch>
  </div>
);

export default routes;