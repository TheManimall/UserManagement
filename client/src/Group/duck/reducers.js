import types from './types';
import { addGroupTypes } from '../../AddGroup/duck';
import { searchTypes } from '../../Search/duck';

const groupReducer = (state = { groups: [], searchGroups: [], isSearch: false }, action) => {
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
        searchGroups: state.groups.filter((el) => {
          const gName = el.groupName.toLowerCase();
          const value = action.payload.toLowerCase();
          return (gName.includes(value));
        }),
        isSearch: true,
        groups: state.groups,
      };

    default:
      return {
        ...state,
      };
  }
};

export default groupReducer;
