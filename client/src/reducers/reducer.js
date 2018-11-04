import { combineReducers } from 'redux';
import * as types from '../actionTypes';

export const users = (state = { users: [] }, action) => {
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

export const getAllGroup = (state = { group: [] }, action) => {
  switch (action.type) {
    case types.GET_GROUP:
      return {
        ...state,
        group: action.group,
      };
    case types.ADD_GROUP:
      return {
        ...state,
        group: state.group.concat(action.payload),
      };
    case types.DELETE_GROUP:
      return {
        ...state,
        group: state.group.filter(group => group._id !== action.payload.id)
      }
    default: {
      return {
        ...state,
      };
    }
  }
};

export const userInfo = (state = { user: {}, group: [] }, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return {
        ...state,
        user: action.user,
        group: action.group,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export const groupInfo = (state = { group: {}, user: [], userInGroup: [] }, action) => {
  switch (action.type) {
    case types.GET_GROUP_INFO:
      return {
        ...state,
        group: action.group,
        user: action.user.filter(el => !el.groupId.find(item => item === action.group._id)),
        userInGroup: action.user.filter(el => el.groupId.find(item => item === action.group._id )),
      };
    case types.ADD_USER_TO_GROUP:
      return {
        ...state,
        user: state.user.filter(el => !action.user._id.includes(el._id)),
        userInGroup: state.userInGroup.concat(action.user),
      };
    case types.REMOVE_USER_FROM_GROUP:
      return {
        ...state,
        user: state.user.concat(action.user),
        userInGroup: state.userInGroup.filter(el => !action.user._id.includes(el._id)),
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
  getAllGroup,
  userInfo,
  groupInfo,
});

export default rootReducer;
