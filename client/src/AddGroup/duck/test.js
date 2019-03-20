import actions from './actions';
import types from './types';

describe('actions', () => {
  it('should create an action to add group success', () => {
    const data = { _id: '5c923912bb4ac60cf73374ae', groupName: 'New Group Test'};
    const expectedAction = {
      type: types.ADD_GROUP,
      payload: {
        _id: data._id,
        groupName: data.groupName,
      },
    };
    expect(actions.addGroupSuccess(data)).toEqual(expectedAction)
  });
});
