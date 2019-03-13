import types from './types';
import { addUserTypes } from '../../AddUser/duck';
import { searchTypes } from '../../Search/duck';

const userReducer = (state = { users: [], searchUsers: [] }, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case addUserTypes.ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case types.DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload.id),
      };
    case searchTypes.SEARCH_USER:
      return {
        ...state,
        searchUsers: state.users.filter((el) => {
          let fName = el.firstName.toLowerCase();
          let lName = el.lastName.toLowerCase();
          let value = action.payload.toLowerCase();
          return (fName.includes(value) || lName.includes(value))
        }),
        users: state.users,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
