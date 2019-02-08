import types from './types';

const addUserSuccess = data => ({
  type: types.ADD_USER,
  payload: {
    _id: data._id,
    firstName: data.firstName,
    lastName: data.lastName,
    groupId: data.groupId,
  },
});

export default { addUserSuccess };
