import actions from './actions';
import types from './types';

describe('actions', () => {
  it('should create an action to get group info', () => {

    const user = [
      { groupId: ['group id test1', 'group id test1'], _id: 'testId1', firstName: 'TestName1', lastName: 'TestLastName1' },
      { groupId: ['group id test2', 'group id test1'], _id: 'testId2', firstName: 'TestName2', lastName: 'TestLastName2' },
      { groupId: ['group id test3', 'group id test2'], _id: 'testid3', firstName: 'TestName3', lastName: 'TestLastName3' },
    ];

    const group = {
      _id: 'Test group id 1',
      groupName: 'Test group name 1',
    };

    const expectedAction = {
      type: types.GET_GROUP_INFO,
      payload: {
        user,
        group,
      },
    };

    expect(actions.getGroupInfoSuccess(group, user)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to add user to group', () => {

    const user = { 
      groupId: ['group id test1', 'group id test1'], 
      _id: 'testId1',
      firstName: 'TestName1',
      lastName: 'TestLastName1',
    };


    const expectedAction = {
      type: types.ADD_USER_TO_GROUP,
      payload: user,
    };

    expect(actions.addUserToGroupSuccess(user)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to remove user from group', () => {

    const user = { 
      groupId: ['group id test1', 'group id test1'], 
      _id: 'testId1',
      firstName: 'TestName1',
      lastName: 'TestLastName1',
    };


    const expectedAction = {
      type: types.REMOVE_USER_FROM_GROUP,
      payload: user,
    };

    expect(actions.removeUserFromGroupSuccess(user)).toEqual(expectedAction);
  });
});
