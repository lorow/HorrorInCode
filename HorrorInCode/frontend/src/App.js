import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import MiddleBilboardText from './components/middleBilboardText';
import Counter from './components/counter';
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
    <Router>
      <Background>
        <Navbar />
        <MiddleBilboardText textToDIsplay={PageInfo.backgroundText} />

        <Switch>
          {
            routes.map(({ path, Component }) => <Route key={path} exact path={path} component={Component} />)
          }
        </Switch>

        <Counter pageNumber={"01"} />
      </Background>
    </Router>
  )
}

export default App;
