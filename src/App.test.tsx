/* tslint:disable: no-expression-statement  */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onChangeGreeting = () => {return;}
  ReactDOM.render(<App welcomeText="hello" onChangeGreeting={onChangeGreeting}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
