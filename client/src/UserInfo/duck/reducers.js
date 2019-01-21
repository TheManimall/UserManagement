import types from './types';

const userInfoReducer = (state = { user: {}, groups: [] }, action) => {
  switch (action.type) {
    case types.GET_USER_INFO:
      return {
        ...state,
        user: action.user,
        groups: action.group,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userInfoReducer;
