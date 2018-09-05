/* tslint:disable: readonly-array  */
import * as React from 'react';
import './App.css';
import { History } from 'history';

import Header from './header/view';
import Router from './router/view';
import Footer from './footer/view';

interface IAppProps {
  readonly history: History
}

// enum Inputs {
//   newGreeting
// }

const App: React.SFC<IAppProps> = (props: IAppProps) => {
  // const inputs: HTMLInputElement[] = [];

  // const addRef = (key: number) => {
  //   return (input: HTMLInputElement) => {
  //     /* tslint:disable: no-object-mutation  */
  //     inputs[key] = input
  //   };
  // }

  return (
    <div className="App">
      <Header />
      <Router history={props.history} />
      <Footer />
    </div>
  );
};

export default App;
