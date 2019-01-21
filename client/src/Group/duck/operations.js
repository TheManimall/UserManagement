import axios from 'axios';

import Creators from './actions';

const getAllGroupSuccess = Creators.getAllGroupSuccess;
const deleteGroupSuccess = Creators.deleteGroupSuccess;

const getAllGroup = () => async (dispatch) => {
  try {
    const resGroup = await axios.get('/api/group');
    dispatch(getAllGroupSuccess(resGroup.data));
  } catch (err) {
    throw (err);
  }
};

const deleteGroup = id => async (dispatch) => {
  try {
    const response = await axios.get(`/api/group/delete/${id}`);
    await axios.put(`api/user/remove-group/${id}`);
    dispatch(deleteGroupSuccess(response.data));
  } catch (error) {
    throw (error);
  }
};

export default { getAllGroup, deleteGroup };
