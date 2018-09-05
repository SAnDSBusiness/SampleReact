import * as React from 'react';

interface IFooterProps {
}

const FooterView: React.SFC<IFooterProps> = (props: IFooterProps) => {
  return (
    <div className="Footer">
      <p className="App-intro">
        Footer
      </p>
    </div>
  );
};

export default FooterView;

