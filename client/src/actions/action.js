import axios from 'axios';

import * as types from '../actionTypes';

export const getUser = res => ({
  type: types.GET_USER,
  user: res,
});

export const addUserSuccess = data => ({
  type: types.ADD_USER,
  payload: {
    _id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    groupId: data.groupId,
  },
});

export const addUser = ({ firstName, lastName, groupId }) => dispatch => axios.post('/api/user', { firstName, lastName, groupId })
  .then((response) => {
    dispatch(addUserSuccess(response.data));
  })
  .catch((error) => {
    throw (error);
  });

export const addGroupSuccess = data => ({
  type: types.ADD_GROUP,
  payload: {
    _id: data._id,
    groupName: data.groupName,
  },
});

export const addGroup = ({ groupName }) => dispatch => axios.post('/api/group', { groupName })
  .then((response) => {
    dispatch(addGroupSuccess(response.data));
  })
  .catch((error) => {
    throw (error);
  });


export const deleteUserSuccess = id => ({
  type: types.DELETE_USER,
  payload: {
    id,
  },
});

export const deleteUser = id => async (dispatch) => {
  try {
    const response = await axios.get(`/api/user/delete/${id}`);
    dispatch(deleteUserSuccess(response.data));
  } catch (error) {
    throw (error);
  }
};

export const deleteGroupSuccess = id => ({
  type: types.DELETE_GROUP,
  payload: {
    id,
  },
});

export const deleteGroup = id => async (dispatch) => {
  try {
    const response = await axios.get(`/api/group/delete/${id}`);
    dispatch(deleteGroupSuccess(response.data));
  } catch (error) {
    throw (error);
  }
};

export const getGroup = res => ({
  type: types.GET_GROUP,
  group: res,
});

export const getUsersData = () => async (dispatch) => {
  try {
    const resUser = await axios.get('/api/user');
    dispatch(getUser(resUser.data));
  } catch (err) {
    throw (err);
  }
};

export const getGroupsData = () => async (dispatch) => {
  try {
    const resGroup = await axios.get('/api/group');
    dispatch(getGroup(resGroup.data));
  } catch (err) {
    throw (err);
  }
};
