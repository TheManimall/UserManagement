import axios from 'axios';

import Creators from './actions';

const getGroupInfoSuccess = Creators.getGroupInfoSuccess;
const addUserToGroupSuccess = Creators.addUserToGroupSuccess;
const removeUserFromGroupSuccess = Creators.removeUserFromGroupSuccess;

const getGroupInfo = id => async (dispatch) => {
  try {
    const resGroup = await axios.get(`/api/group/${id}`);
    const resUser = await axios.get('/api/user/');
    dispatch(getGroupInfoSuccess(resGroup.data, resUser.data));
  } catch (error) {
    throw (error);
  }
};

const addUserToGroup = ({ userId, groupId }) => async (dispatch) => {
  try {
    const res = await axios.put('/api/user/', { userId, groupId });
    dispatch(addUserToGroupSuccess(res.data));
  } catch (error) {
    throw (error);
  }
};

const removeUserFromGroup = ({ userId, groupId }) => async (dispatch) => {
  try {
    const res = await axios.put('/api/user/remove', { userId, groupId });
    dispatch(removeUserFromGroupSuccess(res.data));
  } catch (error) {
    throw (error);
  }
};

export default { getGroupInfo, addUserToGroup, removeUserFromGroup };