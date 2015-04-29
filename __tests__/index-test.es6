import assert from 'assert';
import * as index from '../index';

describe('index', () => {
  it('includes mockComponent', () => assert(typeof index.mockComponent === 'function'));
  it('includes mockStore', () => assert(typeof index.mockStore === 'function'));
  it('includes onDispatchedAction', () => assert(typeof index.onDispatchedAction === 'function'));
  it('includes onStoreChange', () => assert(typeof index.onStoreChange === 'function'));
});
