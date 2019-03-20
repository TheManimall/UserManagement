import actions from './actions';
import types from './types';

describe('actions', () => {
  it('should create an action to get all groups', () => {
    const res = [
      { _id: 'testid1', groupName: 'Test Group1' },
      { _id: 'testid2', groupName: 'Test Group2' },
      { _id: 'testid3', groupName: 'Test Group3' },
    ];
    const expectedAction = {
      type: types.GET_GROUP,
      payload: res,
    };
    expect(actions.getAllGroupSuccess(res)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('should create an action to delete group', () => {
    const id = 'testid1';
    const expectedAction = {
      type: types.DELETE_GROUP,
      payload: {
        id,
      },
    };
    expect(actions.deleteGroupSuccess(id)).toEqual(expectedAction);
  });
});
