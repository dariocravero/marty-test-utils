import { createClass, createElement } from 'react';

export default function mockComponent(name, tagName = 'div') {
  return createClass({
    displayName: `${name}Mock`,
    render() { return createElement(tagName); }
  });
}
