import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TransitionGroup , Transition } from 'react-transition-group';

import './style.scss';

import LandingPanel from '../LandingPanel';
import BlogPanel from '../BlogPanel';
import ProjectsPanel from '../ProjectsPanel';
import AboutPanel from '../AboutPanel';
import ContactPanelContainer from '../../containers/ContactPanelContainer';
import Navbar from '../Navbar';
import SideMenu from '../SideMenu';
import { play } from '../timeline';

function ContentHolder() {

  const routes = [
    { path: '/', name: 'home', Component: LandingPanel },
    { path: '/blog', name: 'blog', Component: BlogPanel },
    { path: '/projects', name: 'projects', Component: ProjectsPanel },
    { path: '/about', name: 'about', Component: AboutPanel },
    { path: '/contact', name: 'contact', Component: ContactPanelContainer },
  ]

  return (
  <main id="content__section" className="content__section">
    <Router>
        <Navbar/>
        <Route render={ ({ location }) => {
          const { pathname, key } = location;

          return (
            <TransitionGroup style={{width: '100vw'}}>
              <Transition
                key={key}
                appear={true}
                onEnter={ ( node ) => play(pathname, true) }
                onExit={ ( node ) => play(pathname, false) }
                timeout={ {enter:750, exit: 150} }
              >
                <Switch location={location}>
                  { routes.map( ({path, Component}) => ( <Route key={path} exact path={path} component={Component} /> ) ) }
                </Switch>
              </Transition>
            </TransitionGroup>
          )
          }}/>
        <SideMenu />
    </Router>
  </main>
  );
}

export default ContentHolder; 