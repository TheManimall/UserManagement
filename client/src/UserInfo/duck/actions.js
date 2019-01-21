import types from './types';

export const getUserInfoSuccess = (user, group) => ({
  type: types.GET_USER_INFO,
  payload: {
    user,
    group,
  },
});

export const deleteUserSuccess = id => ({
  type: types.DELETE_USER,
  payload: {
    id,
  },
});
