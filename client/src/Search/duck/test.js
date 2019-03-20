import actions from './actions';
import types from './types';

describe('actions', () => {
  it('should create an action to search user', () => {

    const user = 'user 1';

    const expectedAction = {
      type: types.SEARCH_USER,
      payload: user,
    };

    expect(actions.searchUser(user)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to search group', () => {

    const group = 'group 1';

    const expectedAction = {
      type: types.SEARCH_GROUP,
      payload: group,
    };

    expect(actions.searchGroup(group)).toEqual(expectedAction);
  });
});
