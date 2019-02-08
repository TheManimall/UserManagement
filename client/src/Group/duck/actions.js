import types from './types';

const getAllGroupSuccess = res => ({
  type: types.GET_GROUP,
  payload: res,
});

const deleteGroupSuccess = id => ({
  type: types.DELETE_GROUP,
  payload: {
    id,
  },
});

export default { getAllGroupSuccess, deleteGroupSuccess };
