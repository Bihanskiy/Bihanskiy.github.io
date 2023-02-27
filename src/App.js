import React, { Suspense } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import MainLayout from './layouts/main/MainLayout';
import AppRoute from './routes/app-route';
import {
  MainRoute,
  AboutRoute,
  ProjectsRoute,
  ContactRoute,
} from './routes/index';

export default function App() {

  return (
    <>
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading</div>}>
            <MainLayout>
              <AppRoute route={MainRoute} />
              <AppRoute route={AboutRoute} />
              <AppRoute route={ProjectsRoute} />
              <AppRoute route={ContactRoute} />
            </MainLayout>
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}
