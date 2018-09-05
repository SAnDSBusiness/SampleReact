/* tslint:disable: no-expression-statement  */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory()

interface IModel {
  readonly greeting: string;
}

export enum Actions {
  CHANGE_GREETING = "CHANGE_GREETING",
}

export interface IMessage {
  readonly type: any;
  readonly payload?: any;
}

export interface IActionChangeGreeting extends IMessage {
  readonly type: Actions.CHANGE_GREETING;
  readonly payload: string;
}

const reducer = (oldModel: IModel, action: IMessage) => {
  if(!oldModel) {return {greeting: "Hello"};}
  if (!action) { return oldModel; }
  switch (action.type) {
    case Actions.CHANGE_GREETING:
        return { ...oldModel, greeting: action.payload };
    default:
        return oldModel;
  }
}


export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();
const store = createStore(
  connectRouter(history)(reducer),
  persistedState,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    ),
  ),
);

store.subscribe(() => {
  saveState(store.getState());
});

const mapStateToProps = (state: IModel, ownProps: any) => {
  return {
    welcomeText: state.greeting +  " user"
  }
}
​
const mapDispatchToProps = (dispatch: (message: IMessage) => void) => {
  return {
    onChangeGreeting: (newMessage: string) => {
      const actionMessage: IActionChangeGreeting = {
        payload: newMessage,
        type: Actions.CHANGE_GREETING
      }
      dispatch(actionMessage)
    }
  }
}

const ReduxConnectedApp = connect<{readonly welcomeText: string}, {readonly onChangeGreeting: (newMessage: string) => void}, {}, IModel>(mapStateToProps, mapDispatchToProps)(App);

import { Route, Switch } from 'react-router-dom' // react-router v4
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <div> { /* your usual react-router v4 routing */ }
          <Switch>
            <Route exact={true} path="/" render={() => (<ReduxConnectedApp/>)} />
            <Route render={() => (<ReduxConnectedApp/>)} />
          </Switch>
        </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
