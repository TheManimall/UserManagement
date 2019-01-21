import axios from 'axios';

import { getUserInfoSuccess, deleteUserSuccess } from './actions';

const getUserInfo = id => async (dispatch) => {
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

const deleteUser = id => async (dispatch) => {
  try {
    const response = await axios.get(`/api/user/delete/${id}`);
    dispatch(deleteUserSuccess(response.data));
  } catch (error) {
    throw (error);
  }
};

export default { getUserInfo, deleteUser };
