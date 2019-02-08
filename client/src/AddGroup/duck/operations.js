import axios from 'axios';
import Creators from './actions';

const addGroupSuccess = Creators.addGroupSuccess;

const addGroup = ({ groupName }) => dispatch => axios.post('/api/group', { groupName })
  .then((response) => {
    dispatch(addGroupSuccess(response.data));
  })
  .catch((error) => {
    throw (error);
  });

export default { addGroup };
