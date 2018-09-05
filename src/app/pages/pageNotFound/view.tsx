import * as React from 'react';

interface IPageNotFoundProps {
}

const PageNotFound: React.SFC<IPageNotFoundProps> = (props: IPageNotFoundProps) => {
  return (
    <div className="PageNotFound">
      <p>
        PageNotFound
      </p>
    </div>
  );
};

export default PageNotFound;

