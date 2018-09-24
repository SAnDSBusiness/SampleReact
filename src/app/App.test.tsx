/* tslint:disable: no-expression-statement  */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as assert from 'assert';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory()
import { connectRouter, routerMiddleware } from 'connected-react-router';
const fakeStoreReducer = (state: any, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(connectRouter(history)(fakeStoreReducer));
  ReactDOM.render(<Provider store={store}>
    <App history={history} />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have a 3 itemv in a dic', () => {
  const div = document.createElement('div');
  const store = createStore(connectRouter(history)(fakeStoreReducer));
  ReactDOM.render(<Provider store={store}>
  <App history={history}/></Provider>, div);
  assert.equal(div.children.length, 1);
  assert.equal(div.children[0].children.length, 3);
  ReactDOM.unmountComponentAtNode(div);
})