import { combineReducers } from 'redux';
import * as types from '../actionTypes';

export const users = (state = { users:[] }, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.user,
      };
    case types.ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload)
      }
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload.id)
      }
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
    case types.ADD_GROUP:
      return {
        ...state,
        groups: state.groups.concat(action.payload)
      }
    case types.DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter(group => group._id !== action.payload.id)
      }
    default: {
      return {
        ...state,
      };
    }
  }
};

const rootReducer = combineReducers({
  users,
  groups
});

export default rootReducer;
