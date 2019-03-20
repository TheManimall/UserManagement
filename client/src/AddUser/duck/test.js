import actions from './actions';
import types from './types';

describe('actions', () => {
  it('should create an action to add user success', () => {
    const data = { 
      _id: '5c923912bb4ac60cf73374ae',
      firstName: 'Test',
      lastName: 'User',
      groupId: '5c923912bb4ac60cf73374ar',
    };
    const expectedAction = {
      type: types.ADD_USER,
      payload: {
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        groupId: data.groupId,
      },
    };
    expect(actions.addUserSuccess(data)).toEqual(expectedAction);
  });
});
