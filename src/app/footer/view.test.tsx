/* tslint:disable: no-expression-statement  */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FooterView from './view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FooterView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
