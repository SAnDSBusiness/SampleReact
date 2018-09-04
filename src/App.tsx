/* tslint:disable: readonly-array  */
import * as React from 'react';
import './App.css';

import Footer from './footer/view';

import logo from './logo.svg';

interface IAppProps {
  readonly welcomeText: string,
  readonly onChangeGreeting: (newGreeting: string) => void,
}

enum Inputs {
  newGreeting
}

const App: React.SFC<IAppProps> = (props: IAppProps) => {
  const inputs: HTMLInputElement[] = [];

  const addRef = (key: number) => {
    return (input: HTMLInputElement) => {
      /* tslint:disable: no-object-mutation  */
      inputs[key] = input;
    };
  }

  const onButtonClick= () => {
    const inputControl: HTMLInputElement = inputs[Inputs.newGreeting];
    props.onChangeGreeting(inputControl.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.welcomeText}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <input
          ref={addRef(Inputs.newGreeting)}
        />
      <button onClick={onButtonClick}>
        Change the greeting
      </button>
      <Footer footerText="My new footer"/>
    </div>
  );
};

export default App;
