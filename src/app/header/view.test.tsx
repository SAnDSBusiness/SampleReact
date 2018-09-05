/* tslint:disable: no-expression-statement  */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import HeaderView from './view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HeaderView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
