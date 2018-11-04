import axios from 'axios';

import * as types from '../actionTypes';

export const getUser = res => ({
  type: types.GET_USER,
  user: res,
});

//add user
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
//end

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
    const resUser = await axios.put(`api/user/remove-group/${id}`);
    dispatch(deleteGroupSuccess(response.data));
  } catch (error) {
    throw (error);
  }
};


export const getUsersData = () => async (dispatch) => {
  try {
    const resUser = await axios.get('/api/user');
    dispatch(getUser(resUser.data));
  } catch (err) {
    throw (err);
  }
};

//get all groups

export const getAllGroupSuccess = res => ({
  type: types.GET_GROUP,
  group: res,
});

export const getAllGroup = () => async (dispatch) => {
  try {
    const resGroup = await axios.get('/api/group');
    dispatch(getAllGroupSuccess(resGroup.data));
  } catch (err) {
    throw (err);
  }
};

//end

export const getUserByIdSuccess = user => ({
  type: types.GET_USER_BY_ID,
  user,
});

//save this :)
export const getUserById = id => async (dispatch) => {
  try {
    const response = await axios.get(`/api/user/${id}`);
    dispatch(getUserByIdSuccess(response.data));
  } catch (error) {
    throw (error);
  }
};

//Get user info

export const getUserInfoSuccess = (user, group) => ({
  type: types.GET_USER_INFO,
  user,
  group
});


export const getUserInfo = id => async (dispatch) => {
  try {
    const resUser = await axios.get(`/api/user/${id}`);
    const arrId = resUser.data.groupId;
    const urlString = arrId.join('&');
    const resGroup = await axios.get(`/api/group/get-by-id/${urlString}`);
    dispatch(getUserInfoSuccess(resUser.data, resGroup.data));
  } catch (error) {
    throw (error);
  }
};

//end

//get group info

export const getGroupInfoSuccess = (group, user) => ({
  type: types.GET_GROUP_INFO,
  group,
  user,
});

export const getGroupInfo = id => async (dispatch) => {
  try {
    const resGroup = await axios.get(`/api/group/${id}`);
    const resUser = await axios.get(`/api/user/`);
    dispatch(getGroupInfoSuccess(resGroup.data, resUser.data));
  } catch (error) {
    throw (error);
  }
};

export const getGroupByIdSuccess = group => ({
  type: types.GET_GROUP_BY_ID,
  group,
});

//end


//add user to group
export const addUserToGroupSuccess = user => ({
  type: types.ADD_USER_TO_GROUP,
  user,
})

export const addUserToGroup = ({ userId, groupId }) => async (dispatch) => {
  try {
    const res = await axios.put('/api/user/', { userId, groupId });
    dispatch(addUserToGroupSuccess(res.data));
  } catch (error) {
    throw (error);
  }
};

//end

//remove user from group
export const removeUserFromGroupSuccess = user => ({
  type: types.REMOVE_USER_FROM_GROUP,
  user,
})

export const removeUserFromGroup = ({ userId, groupId}) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/user/remove`, { userId, groupId});
    dispatch(removeUserFromGroupSuccess(res.data));
  } catch (error) {
    throw (error);
  }
};
//