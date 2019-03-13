import types from './types';
import { addGroupTypes } from '../../AddGroup/duck';
import { searchTypes } from '../../Search/duck';

const groupReducer = (state = { groups: [] }, action) => {
  switch (action.type) {
    case types.GET_GROUP:
      return {
        ...state,
        groups: action.payload,
      };

    case addGroupTypes.ADD_GROUP:
      return {
        ...state,
        groups: state.groups.concat(action.payload),
      };

    case types.DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter(groups => groups._id !== action.payload.id),
      };

    case searchTypes.SEARCH_GROUP:
      return {
        ...state,
        searchUsers: state.users.filter((el) => {
          const gName = el.firstName.toLowerCase();
          const value = action.payload.toLowerCase();
          return (gName.includes(value));
        }),
      };

    default:
      return {
        ...state,
      };
  }
};

export default groupReducer;
