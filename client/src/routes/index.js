import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UsersList from '../containers/UserList';
import NavBar from '../components/NavBar';
import AddUser from '../containers/AddUserCont';
import UserInfoCont from '../containers/UserInfoCont';
import GroupList from '../containers/GroupList';
import GroupInfoCont from '../containers/GroupInfoCont';
import AddGroup from '../containers/AddGroupCont';


const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={NavBar} />
      <Route path="/users" component={UsersList} />
      <Route path="/add-user" component={AddUser} />
      <Route path="/user/:id" component={UserInfoCont} />
      <Route path="/groups" component={GroupList} />
      <Route path="/group/:id" component={GroupInfoCont} />
      <Route path="/add-group" component={AddGroup} />
    </Switch>
  </div>
);

export default routes;