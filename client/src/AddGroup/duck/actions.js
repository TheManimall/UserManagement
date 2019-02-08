import types from './types';

const addGroupSuccess = data => ({
  type: types.ADD_GROUP,
  payload: {
    _id: data._id,
    groupName: data.groupName,
  },
});

export default { addGroupSuccess };
