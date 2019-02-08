import types from './types';
import { addGroupTypes } from '../../AddGroup/duck';

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

    default:
      return {
        ...state,
      };
  }
};

export default groupReducer;
