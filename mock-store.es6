import { spy } from 'sinon';

export default function mockStore(id, options={}) {
  return {
    constructor: {
      id,
      type: 'Store'
    },
    addChangeListener: spy(),
    for() { return this },
    ...options
  };
}
