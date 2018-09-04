/* tslint:disable: no-expression-statement  */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

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
  reducer,
  persistedState,
  composeWithDevTools(),
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

ReactDOM.render(
  <Provider store={store}>
    <ReduxConnectedApp/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
