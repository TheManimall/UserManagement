import types from './types';
import { addUserTypes } from '../../AddUser/duck';

const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case addUserTypes.ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload)
      };
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload.id),
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
