import { combineReducers } from 'redux';
import * as types from '../actionTypes';

export const getUser = (state = { users: [] }, action) => {
  switch(action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.users
      }
      default: {
        return {
          ...state
        }
      }      
  }
};

const mainReducer = combineReducers({
  getUser
});

export default mainReducer;