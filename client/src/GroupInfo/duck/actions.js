import types from './types';

const getGroupInfoSuccess = (group, user) => ({
  type: types.GET_GROUP_INFO,
  payload: {
    group,
    user,
  },
});

const addUserToGroupSuccess = user => ({
  type: types.ADD_USER_TO_GROUP,
  payload: user,
});

const removeUserFromGroupSuccess = user => ({
  type: types.REMOVE_USER_FROM_GROUP,
  payload: user,
});

export default { getGroupInfoSuccess, addUserToGroupSuccess, removeUserFromGroupSuccess };
