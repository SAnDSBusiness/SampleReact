import * as React from 'react';
import logo from './logo.svg';

interface IHeaderProps {
}

const HeaderView: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Header</h1>
    </header>
  );
};

export default HeaderView;
