import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import MiddleBilboardText from './components/middleBilboardText';
import Counter from './components/counter';
import { routes } from './routes';
import './App.css';


const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const Background = styled.div`
  height: 100vh;
  position: fixed;
  width: 100vw;
  background: linear-gradient(240.48deg, #091430 0.49%, rgba(9, 20, 48, 0.97) 100%);
`;

function App() {
  const location = useLocation();
  const PageInfo = useSelector(state => state.pageInfo)
  return (
    <Container>
      <Background />
      <Navbar />
      <MiddleBilboardText textToDIsplay={PageInfo.backgroundText} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          {
            routes.map(({ path, Component }) => <Route key={path} exact path={path} component={Component} />)
          }
        </Switch>
      </AnimatePresence>
      <Counter pageNumber={PageInfo.visualPageIndex} />
    </Container>
  )
}

export default App;
