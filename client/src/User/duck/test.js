import actions from './actions';
import types from './types';

describe('actions', () => {
  it('should create an action to get users', () => {

    const user = [
      { groupId: ['group id test1', 'group id test1'], _id: 'testId1', firstName: 'TestName1', lastName: 'TestLastName1' },
      { groupId: ['group id test2', 'group id test1'], _id: 'testId2', firstName: 'TestName2', lastName: 'TestLastName2' },
      { groupId: ['group id test3', 'group id test2'], _id: 'testid3', firstName: 'TestName3', lastName: 'TestLastName3' },
    ];

    const expectedAction = {
      type: types.GET_USER,
      payload: user,
    };

    expect(actions.getUser(user)).toEqual(expectedAction);
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
