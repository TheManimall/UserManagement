import actions from './actions';
import types from './types';

describe('actions', () => {
  it('should create an action to get user info', () => {

    const user = {
      groupId: ['group id test1', 'group id test1'],
      _id: 'testId1',
      firstName: 'TestName1',
      lastName: 'TestLastName1',
    };

    const group = [
      { _id: 'test group id 1', groupName: 'test group name 1' },
      { _id: 'test group id 2', groupName: 'test group name 2' },
      { _id: 'test group id 3', groupName: 'test group name 3' },
    ];

    const expectedAction = {
      type: types.GET_USER_INFO,
      payload: {
        user,
        group,
      },
    };

    expect(actions.getUserInfoSuccess(user, group)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to delete user', () => {

    const id = 'test id user 1';

    const expectedAction = {
      type: types.DELETE_USER,
      payload: {
        id,
      },
    };

    expect(actions.deleteUserSuccess(id)).toEqual(expectedAction);
  });
});
