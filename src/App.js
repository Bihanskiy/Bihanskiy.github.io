import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/main/MainLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/home/Home';
import Projects from './pages/Projects';
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
        {/* <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer /> */}
      </Router>
    </>
  );
}
