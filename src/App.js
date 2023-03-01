import React, { Suspense } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/spinner/Spinner';
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
        <ScrollToTop>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <MainLayout>
                <AppRoute route={MainRoute} />
                <AppRoute route={AboutRoute} />
                <AppRoute route={ProjectsRoute} />
                <AppRoute route={ContactRoute} />
              </MainLayout>
            </Suspense>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}