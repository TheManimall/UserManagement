import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import UserContainer from './User/UserContainer';
import NavBar from './NavBar/NavBar';
import AddUserContainer from './AddUser/AddUserContainer';
import UserInfoContainer from './UserInfo/UserInfoContainer';
import GroupContainer from './Group/GroupContainer';
import GroupInfoContainer from './GroupInfo/GroupInfoContainer';
import AddGroupContainer from './AddGroup/AddGroupContainer';


const App = () => {
  return (
    <div className="main-cont">
      <NavBar />
      <Switch>
        <Route exact path="/" component={UserContainer} />
        <Route path="/users" component={UserContainer} />
        <Route path="/add-user" component={AddUserContainer} />
        <Route path="/user/:id" component={UserInfoContainer} />
        <Route path="/groups" component={GroupContainer} />
        <Route path="/group/:id" component={GroupInfoContainer} />
        <Route path="/add-group" component={AddGroupContainer} />
      </Switch>
    </div>
  );
};

export default App;
