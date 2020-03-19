import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MiddleBilboardText from './components/middleBilboardText';
import Counter from './components/counter';
import { history } from './history';
import { routes } from './routes';
import './App.css';


const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(240.48deg, #091430 0.49%, rgba(9, 20, 48, 0.97) 100%);
`;

function App() {

  const PageInfo = useSelector(state => state.pageInfo)
  return (
    <Router history={history}>
      <Background>
        <Navbar />
        <MiddleBilboardText textToDIsplay={PageInfo.backgroundText} />

        <Switch>
          {
            routes.map(({ path, Component }) => <Route key={path} exact path={path} component={Component} />)
          }
        </Switch>

        <Counter pageNumber={PageInfo.visualPageIndex} />
      </Background>
    </Router>
  )
}

export default App;
