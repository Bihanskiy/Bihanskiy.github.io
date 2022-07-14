import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

import './App.css'

const routes = [
  { path: '/about', name: 'About', Component: About },
  { path: '/projects', name: 'Projects', Component: Projects },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/', name: 'Home', Component: Home },
]

export default function App() {

  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))}

        <Footer />
      </Router>
    </>
  );
}
