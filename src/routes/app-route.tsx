import React from 'react';
import { Route } from 'react-router-dom';
import { IRoute } from './index';

interface AppRouteProps {
  route: IRoute;
}

const AppRoute = ({
  route: { component, exact, path },
}: AppRouteProps): React.ReactElement => (
  <Route component={component} exact={exact} path={path} />
);

export default AppRoute;