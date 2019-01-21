import types from './types';

const getUser = res => ({
  type: types.GET_USER,
  payload: res,
});

const deleteUserSuccess = id => ({
  type: types.DELETE_USER,
  payload: {
    id,
  },
});

export default { getUser, deleteUserSuccess };
