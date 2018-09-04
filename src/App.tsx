import * as React from 'react';
import './App.css';
import Footer from './footer/Footer';

import logo from './logo.svg';
const App: React.SFC<{welcomeText: string}> = (props: {welcomeText: string}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.welcomeText}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Footer footerText="My new footer"/>
    </div>
  );
};

export default App;
