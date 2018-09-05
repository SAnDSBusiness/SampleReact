import * as React from 'react';
import { Route, Switch } from 'react-router-dom' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history';
import Splash from "../pages/splash/view";
import Help from "../pages/help/view";
import PageNotFound from "../pages/pageNotFound/view";

interface IRouterProps {
    readonly history: History
}

const Router: React.SFC<IRouterProps> = (props: IRouterProps) => {
  return (
    <ConnectedRouter history={props.history}>
        <div> { /* your usual react-router v4 routing */ }
        <Switch>
            <Route exact={true} path="/" render={() => (<Splash />)} />
            <Route exact={true} path="/help" render={() => (<Help />)} />
            <Route render={() => (<PageNotFound />)} />
        </Switch>
        </div>
    </ConnectedRouter>
  );
};

export default Router;




