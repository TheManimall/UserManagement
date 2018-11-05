import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import UserContainer from '../User/UserContainer';
import NavBar from '../NavBar/NavBar';
import AddUserContainer from '../AddUser/AddUserContainer';
import UserInfoCont from '../containers/UserInfoCont';
import GroupContainer from '../Group/GroupContainer';
import GroupInfoCont from '../containers/GroupInfoCont';
import AddGroupComponent from '../AddGroup/AddGroupComponent';

const App = () => {
  return (
    <div className="main-cont">
      <NavBar />
      <Switch>
        <Route exact path="/" component={UserContainer} />
        <Route path="/users" component={UserContainer} />
        <Route path="/add-user" component={AddUserContainer} />
        <Route path="/user/:id" component={UserInfoCont} />
        <Route path="/groups" component={GroupContainer} />
        <Route path="/group/:id" component={GroupInfoCont} />
        <Route path="/add-group" component={AddGroupComponent} />
      </Switch>
    </div>
  );
};

export default App;
