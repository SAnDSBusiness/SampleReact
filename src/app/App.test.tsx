/* tslint:disable: no-expression-statement  */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as assert from 'assert';

import { createBrowserHistory } from 'history';
const history = createBrowserHistory()

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App history={history}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have a 3 itemv in a dic', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App history={history}/>, div);
  assert.equal(div.children.length, 1);
  assert.equal(div.children[0].children.length, 3);
  ReactDOM.unmountComponentAtNode(div);
})