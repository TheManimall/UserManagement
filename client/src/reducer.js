import { combineReducers } from 'redux';

import groupReducer from './Group/duck';
import groupInfoReducer from './GroupInfo/duck';
import userReducer from './User/duck';
import userInfoReducer from './UserInfo/duck';

const rootReducer = combineReducers ({
  group: groupReducer,
  groupInfo: groupInfoReducer,
  user: userReducer,
  userInfo: userInfoReducer,
});

export default rootReducer;
