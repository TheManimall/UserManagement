import axios from 'axios';

import * as types from '../actionTypes';

export const getUser = res => ({
  type: types.GET_USER,
  user: res,
});

export const getGroup = res => ({
  type: types.GET_GROUP,
  group: res,
});

export const getAllData = () => async (dispatch) => {
  try {
    const resUser = await axios.get('/api/user');
    dispatch(getUser(resUser.data));
    const resGroup = await axios.get('/api/group');
    dispatch(getGroup(resGroup.data));
  } catch (err) {
    throw (err);
  }
};
