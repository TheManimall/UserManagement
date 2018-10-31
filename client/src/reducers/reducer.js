import { combineReducers } from 'redux';
import * as types from '../actionTypes';

export const users = (state = { users:[] }, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.user,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export const groups = (state = { groups: [] }, action) => {
  switch (action.type) {
    case types.GET_GROUP:
      return {
        ...state,
        groups: action.group,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

const mainReducer = combineReducers({
  users,
  groups
});

export default mainReducer;
