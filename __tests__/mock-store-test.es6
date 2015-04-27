import assert from 'assert';
import mockStore from '../mock-store';

const ID = 'MyStore';
const STUFF = 'stuff';

it('should mock a store', () => {
  let mock = mockStore(ID);

  assert(typeof mock.constructor === 'object', 'has a constructor');
  assert(mock.constructor.id === ID, 'sets the right id');
  assert(mock.constructor.type === 'Store', 'has its type set to Store');
  assert(typeof mock.addChangeListener === 'function', 'has an addChangeListener spy');
  assert(typeof mock.for === 'function', 'has a for function');
  assert(mock.for() === mock, 'for returns itself');
});

it('expand a mock with custom stuff', () => {
  let mock = mockStore(ID, {
    stuff: STUFF
  });

  assert(mock.stuff === STUFF, 'adds stuff to the mock');
});
