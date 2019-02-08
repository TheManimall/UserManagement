import axios from 'axios';
import Creators from './actions';

const getUser = Creators.getUser;
const deleteUserSuccess = Creators.deleteUserSuccess;

const getUsersData = () => async (dispatch) => {
  try {
    const resUser = await axios.get('/api/user');
    dispatch(getUser(resUser.data));
  } catch (err) {
    throw (err);
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

export default { getUsersData, deleteUser };
