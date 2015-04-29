import assert from 'assert';
import mockComponent from '../mock-component';
import { createRenderer, isElement } from 'react/lib/ReactTestUtils';

const CUSTOM_TAG = 'span';
const DISPLAY_NAME = 'DisplayName';
const DIV = 'div';

describe('#mockComponent', () => {
  let mock; beforeEach(() => mock = mockComponent(DISPLAY_NAME));

  it('is a React element', () => isElement(mock));

  it('sets the right displayName', () => /^`${DISPLAY_NAME}`/.test(mock.displayName));

  describe('renders', () => {
    let renderer; beforeEach(() => renderer = createRenderer());

    it('div as a default tag', () => {
      renderer.render(mock);
      const component = renderer.getRenderOutput();
      assert(component.type === DIV);
    });

    it('custom tag', () => {
      mock = mockComponent(DISPLAY_NAME, CUSTOM_TAG);
      renderer.render(mock);
      const component = renderer.getRenderOutput();
      assert(component.type === CUSTOM_TAG);
    });
  });
});
