import types from './types';

const searchUser = user => ({
  type: types.SEARCH_USER,
  payload: user,
});

const searchGroup = group => ({
  type: types.SEARCH_GROUP,
  payload: group,
});

export default { searchUser, searchGroup };
