import React, { Component } from 'react';
import styled from 'styled-components';
// import LandingPage from './pages/landingPage';
import AboutMe from './pages/aboutMe';
import Navbar from './components/navbar';
import MiddleBilboardText from './components/middleBilboardText';
import Counter from './components/counter';

import './App.css';


const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(240.48deg, #091430 0.49%, rgba(9, 20, 48, 0.97) 100%);
`;

class App extends Component {
  render() {
    return (
      <Background>
        <Navbar />
        <MiddleBilboardText textToDIsplay={"About me"} />
        {/* <LandingPage /> */}
        <AboutMe />
        <Counter pageNumber={"01"} />
      </Background>
    )
  }
}

export default App;
