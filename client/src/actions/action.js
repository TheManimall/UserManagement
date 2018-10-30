import * as types from '../actionTypes';

export const reqUser = () => ({
  type: types.REQ_USER
});

export const getUser = (res) => ({
  type: types.GET_USER,
  user: res,
});
