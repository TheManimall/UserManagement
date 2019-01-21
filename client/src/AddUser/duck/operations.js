import axios from 'axios';

import Creators from './actions';

const addUserSuccess = Creators.addUserSuccess;

const addUser = ({ firstName, lastName, groupId }) => dispatch => axios.post('/api/user', { firstName, lastName, groupId })
  .then((response) => {
    dispatch(addUserSuccess(response.data));
  })
  .catch((error) => {
    throw (error);
  });

export default { addUser };
