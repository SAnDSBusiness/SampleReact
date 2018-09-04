import * as React from 'react';

interface IFooterProps {
  readonly footerText: string
}

const FooterView: React.SFC<IFooterProps> = (props: IFooterProps) => {
  return (
    <div className="Footer">
      <p className="App-intro">
        {props.footerText}
      </p>
    </div>
  );
};

export default FooterView;

