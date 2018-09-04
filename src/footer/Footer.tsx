import * as React from 'react';
const Footer: React.SFC<{footerText: string}> = (props: {footerText: string}) => {
  return (
    <div className="Footer">
      <p className="App-intro">
        {props.footerText}
      </p>
    </div>
  );
};

export default Footer;
