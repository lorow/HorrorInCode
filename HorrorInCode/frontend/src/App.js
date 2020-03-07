import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from './components/navbar';
import MiddleBilboardText from './components/middleBilboardText';
import './App.css';

const Main = styled.main`
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
  background: linear-gradient(240.48deg, #091430 0.49%, rgba(9, 20, 48, 0.97) 100%);
  display: grid;
  grid-template-columns: 177px auto 177px;
  grid-template-rows: 0.4fr 1.1fr 3.6fr 0.8fr 0.6fr;
  grid-template-areas:
  "nothing-left-top       top     nothing-right-top"
  "nothing-left-nav   navigation  nothing-right-nav"
  "nothingLeftMain   main     nothingRightMain"
  "nothing-left     bottom    nothing-right"
  "nothing-left     footer    nothing-right";
`;

class App extends Component {
  render() {
    return (
      <Main>
        <Navbar />
        <MiddleBilboardText textToDIsplay={"My work"} />
      </Main>
    );
  }
}

export default App;
