import types from './types';

const groupInfoReducer = (state = { group: {}, user: [], userInGroup: [] }, action) => {
  switch (action.type) {
    case types.GET_GROUP_INFO:
      return {
        ...state,
        group: action.payload.group,
        user: action.payload.user.filter(el => !el.groupId.find(item => item === action.payload.group._id)),
        userInGroup: action.payload.user.filter(el => el.groupId.find(item => item === action.payload.group._id)),
      };
    case types.ADD_USER_TO_GROUP:
      return {
        ...state,
        user: state.user.filter(el => !action.payload._id.includes(el._id)),
        userInGroup: state.userInGroup.concat(action.payload),
      };
    case types.REMOVE_USER_FROM_GROUP:
      return {
        ...state,
        user: state.user.concat(action.payload),
        userInGroup: state.userInGroup.filter(el => !action.payload._id.includes(el._id)),
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default groupInfoReducer;
