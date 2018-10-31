import axios from 'axios';

import * as types from '../actionTypes';

export const getUser = res => ({
  type: types.GET_USER,
  user: res,
});

export const addUser = ({ firstName, lastName, groupId }) => {
  return (dispatch) => {
    return axios.post('/api/user', { firstName, lastName, groupId })
      .then(response => {
        dispatch(addUserSuccess(response.data))
      })
      .catch(error => {
        throw(error)
      })
  }
};

export const addUserSuccess = data => {
  return {
    type: types.ADD_USER,
    payload: {
      _id: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      groupId: data.groupId
    }
  }
};

export const deleteUser = id => {
  return (dispatch) => {
    return axios.delete(`/api/user/${id}`)
      .then(response => {
        dispatch(deleteUserSuccess(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};

export const deleteUserSuccess = id => {
  return {
    type: types.DELETE_USER,
    payload: {
      id
    }
  }
}

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
